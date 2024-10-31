{
// jodi amra 2tah file same name bah code kori tahole error dibe er jonno {} modhe rakhte hbe 

// spread operator
// rest operatior
// destructuring


// spread operator 

 const x : string[] = ["diya","miya","moni"];
 const y : string[] = ["siba","motu","gojo"];

 const result = x.push(...y)
 console.log(result);
 
//  objcet type
 const highSchoolMester = {
    headmester : "horis",
    sokariHead:"abdur",
    sikkhok :'vobanondo'
 };

 const collageTeacher = {
    principal : "munna",
    sokariHead:"sagor",
    sikkhok :'meghnat'
 }

 const masterlist = {
    ...highSchoolMester,
    ...collageTeacher
 }

// rest operator > eta spreade er familiar


// learn rest operator

 const friendlist = (friend1 :string, fridnd2 :string , friend3:string)=>{
   console.log(`hi${friend1} ${fridnd2} ${friend3}`);
    
 }

 friendlist("abul","kabul","mabul")
//  friendlist("abul", "kabul", "mabul", "dibul") //akhane jodi amra frined barate chai tokhni error dibe

// rest er kaj holo

const greedfriend =(...friends :string[])=>{
    friends.forEach((friend:string)=>console.log(`hi${friend}`));

}
greedfriend("abul", "kabul", "mabul", "dibul", "chabul")






}