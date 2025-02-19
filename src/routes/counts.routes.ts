import {Router, Request, Response} from 'express';
import Count, {CountMap} from '../models/count';
import database from '../database';

const router = Router();


// CALCULATE AND SAVE COUNTS
router.post('/', async (req: Request, res: Response) => {
    try {
        const num1: number = req.body.num1;
        const num2: number = req.body.num2;
        CountMap(database);
        const result: number = num1 + num2;
        await Count.create({count: result});
        res.status(200).json({result});
    } catch (error: any) {
        res.status(500).json({error: error.name});
    }
});

// GET COUNTS
router.get('/', async (req: Request, res: Response) => {
    try {
        CountMap(database);
        const result = await Count.findAll();
        res.status(200).json({counts: result});
    } catch (error: any) {
        res.status(500).json({error: error.name});
    }
});

export default router;