function checkPassword(form){
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == "") {
        alert ("Please enter a password")
    } else if (password2 == "") {
        alert ("Please confirm your password")
    } else if (password1 != password2) {
        alert ("Your passwords do not match!")
        return false;
    } else {
        return true;
    }
}

let pwd = document.getElementById("pwd");
let cPwd = document.getElementById("c-pwd");

cPwd.addEventListener("keydown", () => {
    if (pwd.value != cPwd.value) {
        pwd.style.border = "1px solid red";
        cPwd.style.border = "1px solid red";
        document.getElementById("error").textContent = "* Your passwords do not match";
    }
})