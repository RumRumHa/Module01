// function Product(name, id, productDescription, price) {
//     this.name = name;
//     this.id = id;
//     this.productDescription = productDescription;
//     this.price = price

// }
// let sp01 = new Product("ao thun 91", "sp-01", "Mo ta san pham", 300)
// let sp02 = new Product("bo xanh la cay", "sp-02", "Mo ta san pham", 500)
// let sp03 = new Product("vay nau", "sp-03", "Mo ta san pham", 200);
// let sp04 = new Product("chan vay trang", "sp-04", "Mo ta san pham", 700);
// let sp05 = new Product("chan vay den", "sp-05", "Mo ta san pham", 800);
// let sp06 = new Product("chan vay bu chi den", "sp-06", "Mo ta san pham", 500);
// let sp07 = new Product("ao thun den", "sp-07", "Mo ta san pham", 800);
// let sp08 = new Product("ao thun trang", "sp-08", "Mo ta san pham", 800);
// let sp09 = new Product("ao thun nau", "sp-09", "Mo ta san pham", 600);
// let sp10 = new Product("ao thun hong", "sp-10", "Mo ta san pham", 400);
// let sp11 = new Product("ao co tim trang", "sp-11", "Mo ta san pham", 300);
// let sp12 = new Product("ao co tim water", "sp-12", "Mo ta san pham", 200);
// let sp13 = new Product("ao thun xam", "sp-13", "Mo ta san pham", 600);
// let sp14 = new Product("quan den", "sp-14", "Mo ta san pham", 600);
// let sp15 = new Product("bo trang", "sp-15", "Mo ta san pham", 800);
// let sp16 = new Product("quan den 2", "sp-16", "Mo ta san pham", 700);
// let sp17 = new Product("quan den 3", "sp-17", "Mo ta san pham", 500);
// let sp18 = new Product("quan nau", "sp-18", "Mo ta san pham", 200);
// let sp19 = new Product("bo be", "sp-19", "Mo ta san pham", 100);
// let sp20 = new Product("quan be", "sp-20", "Mo ta san pham", 400);

// const products = [];
// products.push(sp01, sp02, sp03, sp04, sp05, sp06, sp07, sp08, sp09, sp10, sp11, sp12, sp13, sp14, sp15, sp16, sp17, sp18, sp19, sp20)
// let productList = document.getElementById("product-list")
// localStorage.setItem("products", JSON.stringify(products))
let products = JSON.parse(localStorage.getItem("products"))

function render() {
    let html = "";
    for (i = 0; i < products.length; i++) {
        html += ` <div class="item">
                    <img src="../product-image/${products[i].id}.jpg" alt="">
                    <div class="nameProduct"><b>${products[i].name}</b></div>
                    <div class="product-description">${products[i].productDescription}</div>
                    <div class="price">${products[i].price} VND</div>
                    <button onclick="purchase('${products[i].id}')">Mua hàng</button>
                </div>`

    }
    document.getElementById("product-list").innerHTML = html;
}
render()


