// alert('Xin chào!');

/**
 * var, let, const
 * Biết cách khai báo
 */

// Khai báo tuổi của 1 người
// var age = 25;
// age = 26;
// var age = 27;
// console.log("age:", age);
let fullName = "Nguyễn Ngọc Hà";
let $ = 7;
let _ = 1;
let isBoolean = 5 > 4;
console.log(isBoolean);
console.log('Tên của bạn là:', fullName);
let checkIsNull = null;
let checkIsNaN = 'JS' - 5;
console.log(checkIsNaN);
var b = 14;
b+=5;
b=b+5;
console.log(b);
let c = 9;
console.log('c',c++); //9
console.log('c',++c); //11
let isCheck = confirm('Bạn đủ 18 tuổi chưa?');
let age = prompt("Mời bạn nhập số tuổi:");
console.log("age", age);

let toan = +prompt('Nhập điểm toán: ');
let ly = +prompt('Nhập điểm lý: ');
let hoa = +prompt('Nhập điểm hóa: ');
let tb = (toan + ly + hoa)/3;
console.log('Trung bình', tb);