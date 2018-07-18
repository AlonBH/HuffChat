import Users from './model';

export const register = ({body}, res) => Users.find({username: body.username}).then((user) => {
    if (user) {
        res.status(403);
    }

    return Users.create(...body).then(() => res.status(201));
});