function renderCart() {
    let users = JSON.parse(localStorage.getItem("users"));
    let email = localStorage.getItem("currentUser");
    let myCart = users.find((item) => {
        return item.email == email;

    })
    let html = "";
    // console.log(myCart);
    let sum = 0;

    for (i = 0; i < myCart.shoppingcart.length; i++) {

        html += `
            <tr>
                <td>${i + 1}</td>
                <td>${myCart.shoppingcart[i].name}</td>
                <td><img src="../product-image/${myCart.shoppingcart[i].id}.jpg" alt=""></td>
                <td>${myCart.shoppingcart[i].price}</td>
                <td>
                    <button>-</button>
                    ${myCart.shoppingcart[i].quantity}
                    <button onclick="increase('${myCart.shoppingcart[i].id}')">+</button>
                </td>
                <td>${myCart.shoppingcart[i].price * myCart.shoppingcart[i].quantity}</td>
            </tr>`
        sum += myCart.shoppingcart[i].price * myCart.shoppingcart[i].quantity;

    };
    document.getElementById("tableBody").innerHTML = html;
    document.getElementById("total").innerHTML = sum;

    // console.log(111, sum);

}
renderCart()

function increase(idSP) {
    let users = JSON.parse(localStorage.getItem("users"));
    let email = localStorage.getItem("currentUser");
    let myCart = users.find((item) => {
        return item.email == email;

    })
    // console.log(111, id);
    /*có id rồi từ id tìm vị trí sản phẩm trong giỏ hàng
    rồi tăng số lượng
     */
    let index = myCart.shoppingcart.findIndex((item) => {
        return item.id == idSP;
    })
    console.log(myCart);

    myCart.shoppingcart[index].quantity++;
    localStorage.setItem("users", JSON.stringify(users))
    renderCart();

}


