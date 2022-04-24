// variabel för att spara datan från API-fetch

let userListDiv = document.querySelector(".userList");
let userListElements = "";

// funktion för att hämta datan och cacha till variabel i htmlForm.
async function fetchData() {
  await fetch("https://reqres.in/api/users/")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        userListElements += `<a href="user${data.data[i].id}.html"><div class= userCard><div class=user${data.data[i].id}>
            <img class="idImages" src=${data.data[i].avatar} alt="image of user"></img>
            <p class="name">${data.data[i].first_name} ${data.data[i].last_name}</p>
            <p class="email">email: ${data.data[i].email}</p>
        </div></div></a>`;
      }
      userListDiv.innerHTML = userListElements;
    });
}
// funktionen körs
fetchData();
