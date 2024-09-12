const genderMapping = {
    'maleEdit': "Nam",
    'femaleEdit': 'Nữ',
    'Nam': 'maleEdit',
    'Nữ': 'femaleEdit'
}
const statusMapping = {
    'reserveEdit': 'Bảo lưu',
    'waitingClassEdit': 'Chờ lớp',
    'studyingEdit': 'Đang học',
    'suspendEdit': 'Đình chỉ',
    'graduateEdit': 'Tốt nghiệp',
    'Bảo lưu': 'reserveEdit',
    'Chờ lớp': 'waitingClassEdit',
    'Đang học': 'studyingEdit',
    'Đình chỉ': 'suspendEdit',
    'Tốt nghiệp': 'graduateEdit'
};
function validateInput(nameStudent, yearOfBirth, addressStudent, emailStudent, phoneStudent) {
    if (!nameStudent || !yearOfBirth || yearOfBirth <= 1995 || !addressStudent || !emailStudent || !phoneStudent) {
        alert('Vui lòng điền đầy đủ thông tin và đảm bảo năm sinh lớn hơn 1995.');
        return false;
    }
    return true;
}
function populateClassDropdown(selectedCodeClass) {
    const classSelect = document.getElementById('modalChooseClassEdit');
    const classes = JSON.parse(localStorage.getItem('classes')) || [];
    if (classSelect) {
        classSelect.innerHTML = '';
        classes.forEach(classe => {
            const option = document.createElement('option');
            option.value = classe.codeClass;
            option.textContent = classe.nameClass;
            if (classe.nameClass === selectedCodeClass) {
                option.selected = true;
            }
            classSelect.appendChild(option);
        });
    }
}
// Hàm để cập nhật thông tin sinh viên
function updateStudent() {
    const codeStudent = document.getElementById('modalCodeStudentEdit').value.trim();
    const nameStudent = document.getElementById('modalNameStudentEdit').value.trim();
    const yearOfBirth = parseInt(document.getElementById('modalYearOfBirthEdit').value.trim(), 10);
    const addressStudent = document.getElementById('modalAddressStudentEdit').value.trim();
    const emailStudent = document.getElementById('modalEmailStudentEdit').value.trim();
    const phoneStudent = document.getElementById('modalPhoneStudentEdit').value.trim();
    const genderStudent = document.querySelector('input[name="options-outlined-gender-edit"]:checked').id;
    const statusStudent = document.querySelector('input[name="options-outlined-status-edit"]:checked').id;
    const classSelect = document.querySelector('#modalChooseClassEdit');
    const codeClassStudent = classSelect.value; 

    // Kiểm tra dữ liệu đầu vào
    if (!validateInput(nameStudent, yearOfBirth, addressStudent, emailStudent, phoneStudent)) {
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
    
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let classes = JSON.parse(localStorage.getItem("classes")) || [];
    const classStudent = classes.find(classe => classe.codeClass === codeClassStudent)?.nameClass || '';
    // Cập nhật thông tin sinh viên
    students = students.map(student => {
        if (student.codeStudent === codeStudent) {
            return {
                ...student,
                nameStudent: nameStudent,
                yearOfBirth: yearOfBirth,
                addressStudent: addressStudent,
                emailStudent: emailStudent,
                phoneStudent: phoneStudent,
                genderStudent: genderMapping[genderStudent],
                statusStudent: statusMapping[statusStudent],
                classStudent: classStudent
            };
        }
        return student;
    });

    // Lưu lại vào localStorage và cập nhật bảng
    localStorage.setItem('students', JSON.stringify(students));
    renderTable(sortByName());
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modal-student-edit'));
    modal.hide();
}
// Hàm để sửa lớp học
function editStudent(event) {
    event.preventDefault();
    const td = event.target;
    
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');
    
    if (cells.length > 0) {
        const codeStudent = cells[1].textContent.trim();
        const nameStudent = cells[2].textContent.trim();
        const yearOfBirth = cells[3].textContent.trim();
        const addressStudent = cells[4].textContent.trim();
        const emailStudent = cells[5].textContent.trim();
        const phoneStudent = cells[6].textContent.trim();
        const genderStudent = cells[7].textContent.trim()
        const statusStudent = cells[8].textContent.trim()
        const codeClassStudent = cells[9].textContent.trim();

        // Cập nhật giá trị vào các trường của modal
        document.getElementById('modalCodeStudentEdit').value = codeStudent;
        document.getElementById('modalNameStudentEdit').value = nameStudent;
        document.getElementById('modalYearOfBirthEdit').value = yearOfBirth;
        document.getElementById('modalAddressStudentEdit').value = addressStudent;
        document.getElementById('modalEmailStudentEdit').value = emailStudent;
        document.getElementById('modalPhoneStudentEdit').value = phoneStudent;

        

        const targetGenderId = Object.keys(genderMapping).find(key => genderMapping[key] === genderStudent);
        const targetStatusId = Object.keys(statusMapping).find(key => statusMapping[key] === statusStudent);   
        
        document.querySelectorAll('input[name="options-outlined-gender-edit"]').forEach(radioButton => {
            radioButton.checked = radioButton.id === targetGenderId;
        });
        // Cập nhật trạng thái cho radio buttons
        document.querySelectorAll('input[name="options-outlined-status-edit"]').forEach(radioButton => {
            radioButton.checked = radioButton.id === targetStatusId;
        });
        populateClassDropdown(codeClassStudent);

        // Gán lại sự kiện cho nút Cập nhật
        const updateButton = document.getElementById('updateButton');
        updateButton.removeEventListener('click', updateStudent);
        updateButton.addEventListener('click', updateStudent);
    } else {
        alert('Không tìm thấy thông tin khóa học trong dòng.');
    }
}
// Thêm sự kiện cho tất cả các nút Sửa trong bảng
function addEditEvent() {
    document.querySelectorAll('.main-student-edit').forEach(button => {
        button.addEventListener('click', editStudent);
    });
}