{
    //mapped types 


   const nus: number[] = [1,2,3,4,5];

   const mapingNumber: string[] = nus.map((nmb) =>
     nmb.toString()
   );

 console.log(mapingNumber);
 

//akhane khub sohoje type gulake alda type convarte korte parteci mepped  er madhome
 type ArrayNumber = {

  hight:number;
  width:number
 }

  type ArrayString ={
    [key in keyof ArrayNumber] : string
  }







//

}