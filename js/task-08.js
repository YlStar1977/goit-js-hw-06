const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Всі поля повинні бути заповнені");
        return;
    }
}

const loginData = {
    email: emailInput.value,
    password: passwordInput.value,
};
