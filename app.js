const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const name = document.getElementById("name");
const user_name = document.getElementById("email");
const pass = document.getElementById("password");

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
    const formData = {
        name: name.value,
        email: user_name.value,
        password: pass.value
    };
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result)
    window.location.href = 'https://www.ilmkidunya.com/11th-class/notes/biology-federal-board#google_vignette'
});
