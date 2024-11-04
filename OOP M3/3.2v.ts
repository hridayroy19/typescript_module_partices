{
// OOP inheritance

 class parent {
    name : string;
    age : string;
    address : string;
    loction : string
   
     constructor(name :string , age :string, address :string, loction :string){
      this.name = name;
      this.age = age;
      this.address = address;
      this.loction = loction
     }
    //  getSleepHours(numberHours : number){
    //   console.log(`${this.name} will take ${numberHours}`);
      
    //  }
 }


class student extends parent {
   constructor(name :string , age :string, address :string, loction :string){
    super(name, age, address, loction)
   }
   getSleepHours(numberHours : number){
    console.log(`${this.name} will take ${numberHours}`);
    
   }
}

const student1 = new student("hridoy", "20", "dinajpur", "setabhonj")


//teacher
class teacher extends parent {

    designation : string
   
     constructor(name :string , age :string, address :string, loction :string ,designation : string){
        super(name, age, address, loction)
      this.designation = this.designation
     }
    //  getSleepHours(numberHours : number){
    //   console.log(`${this.name} will take ${numberHours}`);
    //  }

  }
  
  const teacher1 = new teacher("hridoy", "20", "dinajpur", "setabhonj", "teacher")


}