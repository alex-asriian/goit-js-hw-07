const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }

    const userInfo = {
        email,
        password,
    }
    console.log(userInfo);
    form.reset();
    
})