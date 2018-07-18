import Reservations from './model';

export const getReservations = () => Reservations.find()
    .then(all => all);

export const addReservation = ({body}, res) => Reservations.create(...body)
    .then(() => res.status(201));