import _ from 'lodash';

const shuffleUsers = (users, dayType) => _(users)
  .groupBy(`points.${dayType}`)
  .map(users => _.shuffle(users))
  .flatMap()
  .value();

const getUsersByWorkDays = users => _.sortBy([...users]
  .filter(user => !user.isCareerSoldier && !user.isDisabled),
user => user.points.workdays);

const pickGuards = users => {
  const [firstGuard, ...restOfUsers] = users;

  const secondGuard = restOfUsers.find(x => x.gender === firstGuard.gender && (x.isExposed || firstGuard.isExposed));

  if (!secondGuard) {
    return;
  }

  return {
    firstGuard,
    secondGuard
  };
};

const assignDay = (users, day, dayType) => {
  const unrestrictedUsers = users.filter(user => !user.restrictions
    .filter(x => x.isApproved)
    .map(x => x.date)
    .contains(day));

  if (unrestrictedUsers.length < 2) {
    throw new Error('No people omg!');
  }

  const guards = _(shuffleUsers(unrestrictedUsers, dayType))
    .groupBy('gender')
    .values()
    .map(pickGuards)
    .compact()
    .value();

  if (!guards.length) {
    throw new Error('No people omg!');
  }

  return guards[0];
};

export default ({users, weekDates}) => {
  const workDaysUsers = getUsersByWorkDays(users);
};