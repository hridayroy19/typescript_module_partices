{
    // utility types

    //pick  >>

    type person = {
        name:string;
        age:number;
        addresh:string
        location?:string
    }

type nameAge = Pick< person , "name" | 'age'>   //pick er madhorm amra kono spacifice data niye aste pari
// এখানে PersonNameAndEmail type এ কেবল name এবং ageথাকবে, এবং loction ও address বাদ যাবে।
// Pick এর মাধ্যমে TypeScript এ type management আরও সহজ হয়, কারণ বড় কোনো type থেকে কেবল প্রয়োজনীয় অংশটুকু রেখে একটি নতুন type তৈরি করা যায়।

// Omit >>>>
type personContactInfo = Omit <person,"name"|"age">  // type এ কেবল name এবং age property থাকবে, কারণ location এবং address বাদ দেওয়া হয়েছে। Omit এর মাধ্যমে আমরা সহজেই নির্দিষ্ট কিছু property বাদ দিয়ে একটি নতুন type তৈরি করতে পারছি।


// required

type personrequired = Required <person>
//এখানে person object তৈরির সময় age এবং email property গুলো দেওয়া বাধ্যতামূলক হয়েছে, কারণ Required utility type এর মাধ্যমে এগুলো required হিসেবে তৈরি করা হয়েছে

//partial 

 type personPartial = Partial <person>  
 //sob gula property string undefind kore dice partial mardhome

//Readonly

type personReadonly = Readonly <person> //er madhome kno prperty value change kore parbo nah
    










//

}