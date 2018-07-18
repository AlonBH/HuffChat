import {AsyncRouter} from 'express-async-router';
import { getReservations, addReservation } from './controller';

const reservationsRouter = AsyncRouter();

reservationsRouter.get('/', getReservations);
reservationsRouter.post('/', addReservation);

export default reservationsRouter;
