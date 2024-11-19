import { Schema, model } from 'mongoose';
import {
  Student,
  Guardian,
  LocalGuardian,
  UserName,
} from './students/student.interface';

const userNameSchama = new Schema<UserName>({
  fastName: { type: String, require: true },
  medilName: { type: String },
  lastName: { type: String, require: true },
});

const guardianSchama = new Schema<Guardian>({
  fatherName: { type: String, require: true },
  faterContcat: { type: String },
  motherName: { type: String, require: true },
  motherContact: { type: String },
});

const localGuardianSchama = new Schema<LocalGuardian>({
  name: { type: String },
  occoupation: { type: String },
  address: { type: String },
  contactNo: { type: String },
});

const studentSchama = new Schema<Student>({
  id: { type: String },
  name: userNameSchama,
  gender: ['male', 'female'],
  email: { type: String, required: true },
  phoneNo: { type: String },
  dateOfBirthday: { type: String },
  booldGorup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  address: { type: String, required: true },
  permanetAddress: { type: String },
  guardian: guardianSchama,
  localGuaridian: localGuardianSchama,
  profileImage: { type: String },
});

export const StudentModel = model<Student>('student', studentSchama);
