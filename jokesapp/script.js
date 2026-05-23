async function getNewJoke() {
  const API_URL =
   (" https://v2.jokeapi.dev/https://v2.jokeapi.dev/joke/Any") ;

  const response = await fetch(API_URL);
  console.log(response);
  const data = response.json();

  console.log(data);
//   if (data.type === "single") {
//     document.getelementbyid("setup").innerText = data.joke;
//     document.getElementById("delivery").innerText = "";
//   } else {
//     document.getElementById("setup").innerText = data.joke;
//     document.getElementById("delivery").innerText = data.delivery;
//   }

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("delivery").innerText = data.delivery || " ";
}
