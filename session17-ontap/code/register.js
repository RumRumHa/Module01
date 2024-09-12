

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("re-enter-password").value;
    let nameUser = document.getElementById("name").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (password !== rePassword) {
        alert("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại.");
        return;
    }
    const user = {
        name: nameUser,
        id: Math.floor(Math.random() * 999) + new Date().getMilliseconds(),
        email: email,
        password: password,
    }
    console.log(email + " " + password);

    let emailExists = users.some(element => element.email === email);

    if (emailExists) {
        alert("Email đã tồn tại, vui lòng đăng nhập.");
        window.location.href = "http://127.0.0.1:5500/dangnhap-dang%20ky/code/login.html";
    } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công.");
        window.location.href = "http://127.0.0.1:5500/dangnhap-dang%20ky/code/login.html";
    }
}
let btnSignUp = document.getElementById("btn-signup");
btnSignUp.onclick = function () {
    register();
};






