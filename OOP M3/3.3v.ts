{
    // type guards
    //typeof ----> type of guards

    type Alphanumaric = string | number;

    const add = (parms1: Alphanumaric, parms2: Alphanumaric): Alphanumaric => {
        if (typeof parms1 === "number" && parms2 === "number") {
            return parms1 + parms2
        }
        else {
            return parms1.toString() + parms2.toString();
        }
    }
 const result1 = add(10, 5);
console.log(result1);















    //
}