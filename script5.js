// variabel för att spara datan från API-fetch

let userDiv = document.querySelector(".user");
let userInfo = "";

// funktion för att hämta datan och cacha till variabel i htmlForm.
async function fetchData() {
  await fetch("https://reqres.in/api/users/5")
    .then((res) => res.json())
    .then((data) => {
      userInfo = `<div class= indUser><div class=user${data.data.id}>
            <img class="idImages" src=${data.data.avatar} alt="image of user"></img>
            <p class="name">${data.data.first_name} ${data.data.last_name}</p>
            <p class="email">email: ${data.data.email}</p>
            <p class="text">${data.support.text} <a href=${data.support.url} class= "supportLink"> Support</a> </p>
        </div></div>`;
      userDiv.innerHTML = userInfo;
      console.log(data);
    });
}
// funktionen körs
fetchData();
