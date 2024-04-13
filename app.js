const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const name = document.getElementById("Name");
const user_name = document.getElementById("Username");
const pass = document.getElementById("Password");
console.log(name,user_name,pass)

// sign_up_btn.addEventListener('click', () =>{
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener('click', () =>{
//     container.classList.remove("sign-up-mode");
// });

 // API call
 const thisForm = document.getElementById('myform');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});
