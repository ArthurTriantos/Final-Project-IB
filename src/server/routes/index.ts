import * as express from 'express';
import profileinfoRouter from './profileinfo';
import usersRouter from "./users";
import activitiesRouter from './activities';
import hobbiesRouter from './hobbies'
import commentsRouter from './comments'

const router = express.Router();

router.use('/profileinfo', profileinfoRouter);
router.use('/users', usersRouter);
router.use("/activities", activitiesRouter);
router.use("/hobbies", hobbiesRouter);
router.use('/comments', commentsRouter)

export default router;