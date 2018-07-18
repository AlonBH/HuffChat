let users = [
  {name: 'Alon', gender: 'male', points: 0},
  {name: 'sapir', gender: 'female', points: 0},
  {name: 'ori', gender: 'male', points: 1},
  {name: 'moshe', gender: 'male', points: 1},
  {name: 'roy', gender: 'male', points: 2},
  {name: 'liron', gender: 'female', points: 0},
  {name: 'yael', gender: 'female', points: 1},
  {name: 'haim', gender: 'male', points: 1}

];

function sortUsersByPoints () {
  return users.sort((a, b) => {
    return a.points - b.points;
  });
}

const generate = (request, response) => {
  const guards = new Array(4).fill(new Array(6));
  let sortedUsers = users;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      sortedUsers = sortUsersByPoints();
      const firstUser = sortedUsers[0];
      const secondUser = sortedUsers.filter(x => x.gender === firstUser.gender && x.name !== firstUser.name)[0];

      guards[i][j] = {firstUser, secondUser};
      firstUser.points++;
      secondUser.points++;
    }
  }

  sortedUsers = sortUsersByPoints();
  const pointToRemove = sortedUsers[0].points;

  users = users.map(x => x.points - pointToRemove);

  console.log(guards);
  console.log(users);
};

generate(null, null);