{
    // ternary operator || optinal chaning || nulish coalesing operator


    const age : number = 25;

    if(age >= 25){
        console.log("adult");
        
    } else{
        console.log("not adult");
        
    }


     const isAdult = age >=18 ? "adult" : "not adult";
    //  console.log({isAdult});
     
// nullish coaescing operator
// null / undefind upore modhe thake jdi kuno qustion make korte hoi tokhni eta use korbo


const isAuthication = null ;

const result = isAuthication ?? "gest"
console.log({result});








}