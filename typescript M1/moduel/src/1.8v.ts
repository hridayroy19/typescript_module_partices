{
    // distcturing operator


const user ={
    id:12121,
   name :{
    fastName :"Hridoy",
    middleName: "chandra",
    lastName: "roy"
   },
   address : "kasmir",
   contact : "01454545454"
}

const {contact , name:{middleName}} = user
// const {contact : string > use kora jabe nah $ type use kora jabenh :contaceName kichu use korle name poribotton hobe , name:{middleName}} = user

// array desticuturing 

const girlsName = ["mini","debi","bithi","sejho","mamuni","modhu"];

// const [a , b ,c] = girlsName aivabe fast naem a nibe secound naem b nibe 

// amra jodi chai kuno ekta value ke spacecis vabe nibo jete nbo nh tar samene , , use korte pari

// const [,,girldfriend,,myex ] = girlsName //and bithi  r modhu

const [,,girldfriend, ...rest ] = girlsName //tahole bither pore sobaike nibe rest modhe rakhe dibe






}