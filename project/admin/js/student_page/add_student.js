function clearModalData() {
    document.querySelector('#modalCodeStudent').value = '';
    document.querySelector('#modalNameStudent').value = '';
    document.querySelector('#modalYearOfBirth').value = '';
    document.querySelector('#modalAddressStudent').value = '';
    document.querySelector('#modalEmailStudent').value = '';
    document.querySelector('#modalPhoneStudent').value = '';
    document.querySelector('#male').checked = true;
    document.querySelector('#female').checked = false;
    document.querySelector('#reserve').checked = false;
    document.querySelector('#waitingClass').checked = true;
    document.querySelector('#studying').checked = false;
    document.querySelector('#suspend').checked = false;
    document.querySelector('#graduate').checked = false;
    document.querySelector('#modalChooseClass').value = 'chooseClass';
}

function validateEmail(emailStudent) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(emailStudent);
}
function validateVietnamesePhoneNumber(phoneStudent) {
    const phoneRegex = /^(?:0)?[1-9][0-9]{8}$/;
    return phoneRegex.test(phoneStudent);
}
function addStudent() {
    const codeStudent = document.querySelector('#modalCodeStudent').value.trim();
    const nameStudent = document.querySelector('#modalNameStudent').value.trim();
    const yearOfBirth = parseInt(document.querySelector('#modalYearOfBirth').value.trim(), 10);
    const addressStudent = document.querySelector('#modalAddressStudent').value.trim();
    const emailStudent = document.querySelector('#modalEmailStudent').value.trim();
    const phoneStudent = parseInt(document.querySelector('#modalPhoneStudent').value.trim(), 10);
    const genderStudent = document.querySelector('#male').checked ? 'Nam' : 'Nữ';
    const statusStudent = document.querySelector('#waitingClass').checked 
        ? 'Chờ lớp' 
        : document.querySelector('#reserve').checked 
            ? 'Bảo lưu' 
            : document.querySelector('#studying').checked
                ? 'Đang học'
                : document.querySelector('#suspend').checked
                    ? 'Đình chỉ'
                    : 'Tốt nghiệp';
    const classSelect = document.querySelector('#modalChooseClass');
    const classOption = classSelect.options[classSelect.selectedIndex];
    const classStudent = classOption ? classOption.textContent.trim() : '';

    if (!codeStudent || !nameStudent || !yearOfBirth || !addressStudent || !emailStudent || !phoneStudent) {
        alert('Các dữ liệu phải được nhập.');
        return;
    }
    if (isNaN(yearOfBirth) || yearOfBirth <= 1995) {
        alert('Năm sinh phải lớn hơn 1995');
        return;
    }

    if(!validateEmail(emailStudent)) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }

    if (!validateVietnamesePhoneNumber(phoneStudent)) {
        alert('Vui lòng nhập số điện thoại hợp lệ!');
        return;
    }

    let students = JSON.parse(localStorage.getItem('students')) || [];

    if (students.some(student => student.codeStudent === codeStudent)) {
        alert('Mã sinh viên đã tồn tại.');
        return;
    }

    students.push({
        codeStudent,
        nameStudent,
        yearOfBirth,
        addressStudent,
        emailStudent,
        phoneStudent,
        genderStudent,
        statusStudent,
        classStudent
    });

    localStorage.setItem('students', JSON.stringify(students));
    renderTable(sortByName());
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.querySelector('#modal-student-add'));
    modal.hide();
    clearModalData();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable(sortByName());
    updatePagination();

    let classes = JSON.parse(localStorage.getItem('classes')) || [];
    let waitingClass = classes.filter(classe => classe.statusClass === "Chờ lớp");
    
    const classSelect = document.querySelector('#modalChooseClass');
    if (classSelect) { 
        classSelect.innerHTML = '<option value="chooseClass" selected disabled>Chọn lớp học</option>';
        waitingClass.forEach(classe => {
            const option = document.createElement('option');
            option.value = classe.codeClass; 
            option.textContent = classe.nameClass;
            classSelect.appendChild(option);
        });
    } else {
        console.error('Select element not found');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const modalAddStudent = document.getElementById('modal-student-add');
    if (modalAddStudent) {
        modalAddStudent.addEventListener('hidden.bs.modal', function () {
            clearModalData();
        });
    }
});