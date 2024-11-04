"use strict";
{
    // OOP inheritance
    class parent {
        constructor(name, age, address, loction) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.loction = loction;
        }
    }
    class student extends parent {
        constructor(name, age, address, loction) {
            super(name, age, address, loction);
        }
        getSleepHours(numberHours) {
            console.log(`${this.name} will take ${numberHours}`);
        }
    }
    const student1 = new student("hridoy", "20", "dinajpur", "setabhonj");
    //teacher
    class teacher extends parent {
        constructor(name, age, address, loction, designation) {
            super(name, age, address, loction);
            this.designation = designation;
        }
    }
    const teacher1 = new teacher("hridoy", "20", "dinajpur", "setabhonj", "teacher");
    //
}
