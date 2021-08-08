import * as express from 'express';
import profileinfoRouter from './profileinfo';
import usersRouter from "./users";
import activitiesRouter from './activities';

const router = express.Router();

router.use('/profileinfo', profileinfoRouter);
router.use('/users', usersRouter);
router.use("/activities", activitiesRouter);

export default router;