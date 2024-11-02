{
    //fuction with generices

      const creteeArray = (param : string) : string[]=>{
        return [param]
      }


      const creteeArrayWith = <T> (param : T) : T[]=>{
        return [param]
      }

     const res1 = creteeArrayWith<string>("bangladesh");
     const res2 = creteeArrayWith<boolean>(true)

// <><><><>
      interface user {
        id : number,
        name : string
      }
  const resgenarice = creteeArrayWith<user>({
    id:1212,
    name:"hello "
  })

//type take generice vabe use korte partchi abong monr moto data ues koter partci
    //
}