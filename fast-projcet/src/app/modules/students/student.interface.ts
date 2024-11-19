export type UserName = {
  fastName: string;
  medilName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  faterContcat: string;
  motherName: string;
  motherContact: string;
};

export type LocalGuardian = {
  name: string;
  occoupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  phoneNo: string;
  dateOfBirthday?: string;
  booldGorup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address: string;
  permanetAddress: string;
  guardian: Guardian;
  localGuaridian: LocalGuardian;
  profileImage?: string;
};
