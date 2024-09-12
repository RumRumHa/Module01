

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
        id: Math.floor(Math.random() * 999999) + new Date().getMilliseconds(),
        email: email,
        password: password,
        status: "",
        shoppingcart: [],
    }
    console.log(email + " " + password);

    let emailExists = users.some(element => element.email === email);

    if (emailExists) {
        alert("Email đã tồn tại, vui lòng đăng ký lại.");
        // window.location.href = "login.html";
    } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công.");
        window.location.href = "login.html";
    }
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users"));

    if (!users || users.length === 0) {
        alert("Không có người dùng nào trong hệ thống.");
        return;
    }
    let flag = false;
    const usersUpdate = users.map(
        function (element) {
            if (email === element.email && password === element.password) {
                alert(`Đăng nhập thành công! ID: ${element.id}, Tên người dùng: ${element.name}`);
                flag = true;

                return { ...element, status: "active" };

            } else {
                return { ...element, status: "" };
            }
        }
    );
    if (!flag) {
        alert("Email hoặc mật khẩu không đúng, mời bạn nhập lại");
    } else {

        if (flag) {
            localStorage.setItem("currentUser", email);
            localStorage.setItem("users", JSON.stringify(usersUpdate));
            console.log(123456);

            window.location.href = "index.html";
        }
    }
}
console.log(JSON.parse(localStorage.getItem("users")));


document.addEventListener("DOMContentLoaded", function () {
    let singin = document.getElementById("singin");
    let users = JSON.parse(localStorage.getItem("users"));

    function account() {
        let currentUserEmail = localStorage.getItem("currentUser");

        if (!users || !currentUserEmail) return;

        let currentUser = users.find(user => user.email === currentUserEmail);

        if (currentUser && currentUser.status === "active") {
            singin.innerHTML = `<li><a href="">Tài khoản</a></li>
            <li><a onclick="logout()" href="">Đăng xuất</a></li>`;
        }
    }
    account()
});
function logout() {
    let singin = document.getElementById("singin");
    let users = JSON.parse(localStorage.getItem("users"));
    let currentUserEmail = localStorage.getItem("currentUser");

    if (!users || !currentUserEmail) return;

    const updatedUsers = users.map(element => {
        if (element.email === currentUserEmail) {
            return { ...element, status: "" };
        }
        return element;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.removeItem("currentUser");


    singin.innerHTML = `<li id="singin"><a href="./login.html">Đăng nhập/</a><a href="./register.html">Đăng ký</a></li>`;
}
let myCart = [];
function purchase(productId) {
    let email = localStorage.getItem("currentUser");
    let users = JSON.parse(localStorage.getItem("users"));
    let products = JSON.parse(localStorage.getItem("products"));

    if (!users) {
        alert("Bạn cần đăng nhập để mua hàng.");
        window.location.href = "login.html";
        return;
    }
    // lấy sản phẩm mình cần mua
    let product = products.find((item) => {
        return item.id == productId;
    })
    console.log(product);

    let user = users.find(user => user.email === email);
    console.log(11111, user.shoppingcart);


    // giỏ hàng để đi mua hàng là user.shoppingcart
    // đi kiểm tra xem giỏ hàng có sản phẩm đấy chưa, nếu có thì tăng số lượng, không có thì push vào
    let findIndexProduct = user.shoppingcart.findIndex((item) => {
        return item.id == product.id

    })
    if (findIndexProduct == -1) {
        user.shoppingcart.push({ ...product, quantity: 1 });
        localStorage.setItem("users", JSON.stringify(users));

    } else {
        //tăng số lượng
        user.shoppingcart[findIndexProduct].quantity++;
        localStorage.setItem("users", JSON.stringify(users));
    }

}














