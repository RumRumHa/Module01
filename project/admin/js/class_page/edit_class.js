// Hàm ánh xạ trạng thái lớp học
const statusMapping = {
    'activateEdit': 'Hoạt động',
    'waitingEdit': 'Chờ lớp',
    'endedEdit': 'Kết thúc',
    'Hoạt động': 'activateEdit',
    'Chờ lớp': 'waitingEdit',
    'Kết thúc': 'endedEdit'
};

// Hàm để kiểm tra dữ liệu đầu vào
function validateInput(nameClass, teacherClass, quantityClass, descriptionClass) {
    if (!nameClass || !teacherClass || isNaN(quantityClass) || quantityClass <= 0 || !descriptionClass) {
        alert('Vui lòng điền đầy đủ thông tin và đảm bảo sĩ số lớn hơn 0.');
        return false;
    }
    return true;
}

function populateCourseDropdown(selectedCodeCourse) {
    const courseSelect = document.getElementById('modalChooseCourseEdit');
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    if (courseSelect) {
        courseSelect.innerHTML = '';
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.codeCourse;
            option.textContent = course.nameCourse;
            if (course.nameCourse === selectedCodeCourse) {
                option.selected = true;
            }
            courseSelect.appendChild(option);
        });
    }
}

// Hàm cập nhật thông tin lớp học
function updateClass() {
    const codeClass = document.getElementById('modalCodeClassEdit').value.trim();
    const nameClass = document.getElementById('modalNameClassEdit').value.trim();
    const teacherClass = document.getElementById('modalTeacherClassEdit').value.trim();
    const quantityClass = parseInt(document.getElementById('modalQuantityClassEdit').value.trim(), 10);
    const descriptionClass = document.getElementById('modalDescriptionClassEdit').value.trim();
    const statusClass = document.querySelector('input[name="options-outlined-edit"]:checked').id;
    const courseSelect = document.querySelector('#modalChooseCourseEdit');
    const codeCourseClass = courseSelect.value;

    // Kiểm tra dữ liệu đầu vào
    if (!validateInput(nameClass, teacherClass, quantityClass, descriptionClass)) {
        return;
    }
    let classes = JSON.parse(localStorage.getItem('classes')) || [];
    const isNameDuplicate = classes.some(classe => classe.nameClass === nameClass && classe.codeClass !== codeClass);
    if (isNameDuplicate) {
        alert('Tên lớp học đã tồn tại. Vui lòng chọn tên khác.');
        return;
    }

    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseClass = courses.find(course => course.codeCourse === codeCourseClass)?.nameCourse || '';

    // Cập nhật thông tin lớp học
    classes = classes.map(classe => {
        if (classe.codeClass === codeClass) {
            return {
                ...classe,
                nameClass,
                teacherClass,
                quantityClass,
                descriptionClass,
                statusClass: statusMapping[statusClass],
                courseClass: courseClass
            };
        }
        return classe;
    });

    localStorage.setItem('classes', JSON.stringify(classes));
    const sortedClasses = sortByName(sortOrder, sortField); 
    renderTable(sortedClasses);
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modal-class-edit'));
    modal.hide();
}
// Hàm để sửa lớp học
function editClass(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        const codeClass = cells[1].textContent.trim();
        const nameClass = cells[2].textContent.trim();
        const teacherClass = cells[3].textContent.trim();
        const descriptionClass = cells[4].textContent.trim();
        const quantityClass = cells[5].textContent.trim();
        const statusClass = cells[6].textContent.trim();
        const codeCourseClass = cells[7].textContent.trim();

        document.getElementById('modalCodeClassEdit').value = codeClass;
        document.getElementById('modalNameClassEdit').value = nameClass;
        document.getElementById('modalTeacherClassEdit').value = teacherClass;
        document.getElementById('modalQuantityClassEdit').value = quantityClass;
        document.getElementById('modalDescriptionClassEdit').value = descriptionClass;

        // Cập nhật trạng thái cho radio buttons
        const targetId = statusMapping[statusClass];
        document.querySelectorAll('input[name="options-outlined-edit"]').forEach(radioButton => {
            radioButton.checked = radioButton.id === targetId;
        });
        populateCourseDropdown(codeCourseClass);

        // Gán sự kiện cập nhật cho nút Cập nhật
        const updateButton = document.getElementById('updateButton');
        updateButton.removeEventListener('click', updateClass);
        updateButton.addEventListener('click', updateClass);
    } else {
        alert('Không tìm thấy thông tin khóa học trong dòng.');
    }
}
function addEditEvent() {
    document.querySelectorAll('.main-class-edit').forEach(button => {
        button.addEventListener('click', editClass);
    });
}
