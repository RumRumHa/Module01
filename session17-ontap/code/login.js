let users = JSON.parse(localStorage.getItem("users"));
console.log(users);
let flag = false;


function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    users.status = "";
    if (!users || users.length === 0) {
        alert("Không có người dùng nào trong hệ thống.");
        return;
    }

    const usersUpdate = users.map(
        function (element) {
            if (email === users[i].email && password === users[i].password) {
                return { ...element, status: "active" };

            } else {
                return { ...element, status: "" };
            }

        }
    )
    localStorage.setItem("user", JSON.stringify(usersUpdate))




    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].password) {
            alert(`Đăng nhập thành công! ID: ${users[i].id}, Tên người dùng: ${users[i].name}`);
            window.location.href = "http://127.0.0.1:5500/dangnhap-dang%20ky/code/index.html"
            return;

        }

    }

    alert("Email hoặc mật khẩu không đúng, mời bạn nhập lại");
}

