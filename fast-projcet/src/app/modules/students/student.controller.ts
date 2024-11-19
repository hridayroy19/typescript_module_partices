import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //will cal service func to send this dada
    const result = await StudentServices.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is create succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const allStudnetGet = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.allStudentGetFromDB();
    res.status(200).json({
      success: true,
      message: 'Student is create succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//single data get in student
const studentIdGet = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    // console.log(studentId,"hello");

    const result = await StudentServices.singlestudent(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is create succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  allStudnetGet,
  studentIdGet,
};
