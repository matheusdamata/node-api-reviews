import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/api/reviews', ApiController.listReviews);

export default router;