/**
 1. Câu điều kiện if
 */
// let a=6;
// if (a>5) {
//     console.log("Đúng");
// }
// console.log("1");

/*
  Viết chương trình cho người dùng nhập vào số tuổi nếu lớn hơn 18 tuổi thì báo bạn đủ tuổi xem phim else thì báo là bạn không đủ tuổi xem phim!
 */
// let age = Number(prompt("Mời bạn nhập tuổi: "));
// if (age > 18) {
//     console.log("Bạn đủ tuổi xem phim!");
// }else {
//     console.log("Bạn không đủ tuổi xem phim!");
// }

// Viết chương trình cho người dùng nhập vào 1 ngày bất kỹ trong tuần, in ra thứ
// let  day = +prompt("Mời nhập số");
// if (day == 2) {
//     console.log("Thứ 2");
// } else if (day == 3){
//     console.log("Thứ 3");
// } else if (day == 4){
//     console.log("Thứ 4");
// } else if (day == 5){
//     console.log("Thứ 5");
// } else if (day == 6){
//     console.log("Thứ 6");
// } else if (day == 7){
//     console.log("Thứ 7");
// } else if (day == 8){
//     console.log("Chủ nhật");
// } else {
//     console.log("Giá trị nhập không hợp lệ");
// }



// Viết chương trình cho người dùng nhập vào số bất kỳ nếu
// là số chẵn thì kiểm tra xem có lớn hơn 15 thì in ra màn hình
// nếu là số lẻ thì kiểm tra xem có lớn hơn 6
var number = +prompt("Mời nhập số: ");
if (number%2==0) {
    if (number > 15) {
        // console.log("Số", number, "lớn hơn số 15");
        console.log(`Số ${number} lớn hơn số 15`);
    }
} else {
    if (number > 6) {
        console.log(`Số ${number} lớn hơn số 6`);
    }
}