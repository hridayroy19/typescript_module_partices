import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

//will call controller function
router.post('/crate-student', studentController.createStudent);
router.get('/', studentController.allStudnetGet);
router.get('/:studentId', studentController.studentIdGet);

export const StudentRoute = router;
