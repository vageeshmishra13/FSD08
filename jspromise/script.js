//  function getData(value) {
//   return new Promise((resolve, Reject) => {
//     setTimeout(() => {
//       console.log("Data Sent", value);
//       resolve("query solved");
//     }, 5000);
//   });
// }
// getData(1)
//   .then(() => getData(1))
//   .then(() => getData(2))
//   .then(() => getData(3))
//   .catch((err) => console.log(err));

async function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data found", value);
      resolve("query solved") ;
    }, 2000);
  });
}
await getData(1)
await getData(2)
await getData(3)
await getData(4)
