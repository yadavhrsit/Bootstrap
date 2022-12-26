const usernames = ["admin", "ADMIN", "user", "USER"];
const imagesCollection = [
  "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
  "https://images.unsplash.com/photo-1671807755821-7d1272dfe7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1671906984923-2614067cf78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1671644653101-1c11d3c50c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  "https://images.unsplash.com/photo-1671723521246-a6710cfafc70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1671947289688-8428085b8d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
];

const rightPattern = [0, 2, 1, 3];
const userPattern = [];
const btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
  var i = 0;
  document.getElementById("modal-body").innerHTML = "";

  imagesCollection.forEach((img) => {
    document.getElementById("modal-body").innerHTML += `
        <img src=${img} class="card-img-top ${i}" style="height: 150px;width:250px; margin:5px;"></img>`;
    i++;
  });
  document.querySelectorAll(".card-img-top").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.style.border = "3px solid green";
      classlist = event.target.classList;
      userPattern.push(parseInt(classlist[1]));
    });
  });
});
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  if (
    userPattern.length === rightPattern.length &&
    userPattern.every((value, index) => value === rightPattern[index])
  ) {
    window.alert("Success");
    location.reload();
  } else {
    window.alert("Failed");
    location.reload();
  }
});
