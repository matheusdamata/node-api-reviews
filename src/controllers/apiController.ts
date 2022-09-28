import { Request, Response } from 'express';

import { Review } from '../models/Review';

export const listReviews = async (req: Request, res: Response) => {
    let list = await Review.findAll();
    res.json({ list });
}