import * as express from 'express';
import profileinfoRouter from './profileinfo';

const router = express.Router();

router.use('/profileinfo', profileinfoRouter)

export default router;