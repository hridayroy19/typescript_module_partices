import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get all student
const allStudentGetFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//single data get
const singlestudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  allStudentGetFromDB,
  singlestudent,
};
