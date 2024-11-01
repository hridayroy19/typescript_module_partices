{
    //Generics type

    //  const rollNumber : number[] =[1, 2, 3, 4];  //type alish
    const rollNumber: Array<number> = [1, 2, 3, 4];   //generics type 


    //  const nickName : string[] = ["hr", "hd", "md"] ;
    const nickName: Array<string> = ["hr", "hd", "md"];


    //  const boolArray : boolean[] = [ true, false, true]
    const boolArray: Array<boolean> = [true, false, true]

 //avabeo korte pari generic type er madhome
    type genericsArray<T> = Array<T>;

    const user:genericsArray<{name:string , age:number}> = [{
        name: "hridoy",
        age: 15
    },
    {
        name: "debi",
        age: 15
    }]



}