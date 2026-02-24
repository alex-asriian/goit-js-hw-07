const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentForm = event.target;
    const email = currentForm.elements.email.value.trim();
    const password = currentForm.elements.password.value.trim();
    
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }

    const userInfo = {
        email,
        password,
    }
    console.log(userInfo);
    currentForm.reset();
    
})