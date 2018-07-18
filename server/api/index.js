import { Router } from 'express';

import reservations from './reservations';

const apiRouter = Router();

apiRouter.use('/reservations', reservations);

export default apiRouter;