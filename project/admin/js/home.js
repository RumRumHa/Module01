const courses = JSON.parse(localStorage.getItem('courses')) || [];
const classes = JSON.parse(localStorage.getItem('classes')) || [];
const students = JSON.parse(localStorage.getItem('students')) || [];

document.getElementById('course-count').textContent = courses.length;
document.getElementById('class-count').textContent = classes.length;
document.getElementById('student-count').textContent = students.length;
let countClassActivate = 0;
for (let i = 0; i < classes.length; i++) {
    if (classes[i].statusClass === "Hoạt động") {
        countClassActivate++;
    }
}
document.getElementById('class-activate-count').textContent = countClassActivate;

let countClassEnded = 0;
for (let i = 0; i < classes.length; i++) {
    if (classes[i].statusClass === "Kết thúc") {
        countClassEnded++;
    }
}
document.getElementById('class-ended-count').textContent = countClassEnded;

let countClassWaiting = 0;
for (let i = 0; i < classes.length; i++) {
    if (classes[i].statusClass === "Chờ lớp") {
        countClassWaiting++;
    }
}
document.getElementById('class-waiting-count').textContent = countClassWaiting;

let countStudentWaiting = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].statusStudent === "Chờ lớp") {
        countStudentWaiting++;
    }
}
document.getElementById('student-waiting-count').textContent = countStudentWaiting;

let countStudentStudying = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].statusStudent === "Đang học") {
        countStudentStudying++;
    }
}
document.getElementById('student-studying-count').textContent = countStudentStudying;

let countStudentReserveSuspend = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].statusStudent === "Bảo lưu" || students[i].statusStudent === "Đình chỉ") {
        countStudentReserveSuspend++;
    }
}
document.getElementById('student-reserve-suspend-count').textContent = countStudentReserveSuspend;

let countStudentGraduate = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].statusStudent === "Tốt nghiệp") {
        countStudentGraduate++;
    }
}
document.getElementById('student-graduate-count').textContent = countStudentGraduate;