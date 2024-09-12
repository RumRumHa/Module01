// Hàm để cập nhật thông tin lớp học
function updateCourse() {
    const codeCourse = document.getElementById('modalCodeCourseEdit').value;
    const nameCourse = document.getElementById('modalNameCourseEdit').value;
    const timeCourse = parseFloat(document.getElementById('modalTimeCourseEdit').value);
    const statusCourse = document.querySelector('input[name="options-outlined-edit"]:checked').id;

    const statusMapping = {
        'activateEdit': 'Hoạt động',
        'deactivateEdit': 'Không hoạt động'
    };
    if (!nameCourse || isNaN(timeCourse) || timeCourse <= 0) {
        alert('Vui lòng điền đầy đủ thông tin và đảm bảo thời gian lớn hơn 0.');
        return;
    }
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    const isNameDuplicate = courses.some(course => course.nameCourse === nameCourse && course.codeCourse !== codeCourse);
    if (isNameDuplicate) {
        alert('Tên khóa học đã tồn tại. Vui lòng chọn tên khác.');
        return;
    }
    courses = courses.map(course => {
        if (course.codeCourse === codeCourse) {
            return {
                ...course,
                nameCourse: nameCourse,
                timeCourse: timeCourse,
                statusCourse: statusMapping[statusCourse]
            };
        }
        return course;
    });

    localStorage.setItem('courses', JSON.stringify(courses));
    const sortedCourses = sortByName(sortOrder);
    renderTable(sortedCourses);
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modal-course-edit'));
    modal.hide();
}
// Hàm để sửa khóa học
function editCourse(event) {
    event.preventDefault();
    const td = event.target;
    
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');
    
    if (cells.length > 0) {
        const codeCourse = cells[1].textContent.trim();
        const nameCourse = cells[2].textContent.trim();
        const timeCourse = cells[3].textContent.trim();
        const statusCourse = cells[4].textContent.trim();

        // Cập nhật giá trị vào các trường của modal
        document.getElementById('modalCodeCourseEdit').value = codeCourse;
        document.getElementById('modalNameCourseEdit').value = nameCourse;
        document.getElementById('modalTimeCourseEdit').value = timeCourse;

        const statusMapping = {
            'Hoạt động': 'activateEdit',
            'Không hoạt động': 'deactivateEdit'
        };
        // Lấy ID của radio button từ ánh xạ
        const targetId = statusMapping[statusCourse];
        
        // Cập nhật trạng thái cho radio buttons
        document.querySelectorAll('input[name="options-outlined-edit"]').forEach(radioButton => {
            radioButton.checked = radioButton.id === targetId;
        });

        // Gán lại sự kiện cho nút Cập nhật
        const updateButton = document.getElementById('updateButton');
        updateButton.removeEventListener('click', updateCourse);
        updateButton.addEventListener('click', updateCourse); 
    } else {
        alert('Không tìm thấy thông tin khóa học trong dòng.');
    }
}
// Thêm sự kiện cho tất cả các nút Sửa trong bảng
function addEditEvent() {
    document.querySelectorAll('.main-course-edit').forEach(btn => {
        btn.addEventListener('click', editCourse);
    });
}