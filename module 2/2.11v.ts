{
    // utility types
    //pick


    type person = {
        name:string;
        age:number;
        addresh:string
        location:string
    }

type nameAge = Pick< person , "name" | 'age'>   //pick er madhorm amra kono spacifice data niye aste pari


type personContactInfo = Omit <person,"name"|"age">  // type এ কেবল name এবং age property থাকবে, কারণ location এবং address বাদ দেওয়া হয়েছে। Omit এর মাধ্যমে আমরা সহজেই নির্দিষ্ট কিছু property বাদ দিয়ে একটি নতুন type তৈরি করতে পারছি।







    //
}