// let arr = [
//    { "name" : "Prince",
//      "dob":"22/03/2003",
//      "number": 7879709665,
//      "city":"Bhopal",
//       "profession":"Student"},

      
//        { "name" : "om",
//      "dob":"22/03/2003",
//      "number": 7879709665,
//      "city":"Bhopal",
//       "profession":"Student"},
    


      
       
    
// ]
// arr.forEach(Element => {
//     console.log(Element.name);
// });



// let vishal =[
//     { "name" : "mom",
//      "dob":"22/03/2003",
//      "number": 7879709665,
//      "city":"Bhopal",
//       "profession":"Student"}
// ]

// console.log(Object.keys(vishal));
// console.log(Object.values(vishal));


let ar =[22,23,24,25,26,27]

ar.sort((a,b)=>a-b)
    console.log(ar);
    console.log(ar.find(val=>val===4));
    console.log(ar.findIndex(val=>val===4));
    console.log(ar.findLastIndex(val=>val===4));

    let ar2 =[19,22,23,24,25,26,27]
    console.log(ar2.filter(val=>val > 10));
    console.log(ar2.find(val=>val >26 ));


