let courseToDelete = null;
let nameCourseToDelete = null;

// Hàm để hiển thị modal xác nhận xóa và lưu mã khóa học cần xóa
function showDeleteModal(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        courseToDelete = cells[1].textContent.trim(); // Lưu mã khóa học cần xóa
        nameCourseToDelete = cells[2].textContent.trim();

        // Cập nhật thông báo trong modal
        const deleteMessage = document.getElementById('deleteMessage');
        deleteMessage.textContent = `Bạn chắc chắn muốn xóa ${nameCourseToDelete} - ${courseToDelete}?`;

    } else {
        console.log('Không tìm thấy thông tin khóa học trong dòng.');
    }
}

// Hàm để xóa khóa học
function deleteCourse() {
    if (!nameCourseToDelete) {
        console.error('Không có khóa học nào để xóa.');
        return;
    }

    let classes = JSON.parse(localStorage.getItem('classes')) || [];
    const isLinkedClass = classes.some(classe => classe.courseClass === nameCourseToDelete);
    if (isLinkedClass) {
        alert(`Không thể xóa ${nameCourseToDelete} - ${courseToDelete} vì đã có lớp học liên kết.`);
        
        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('modal-course-delete'));
        if (deleteModal) {
            deleteModal.hide();
        }
        return;
    }

    // Lấy danh sách lớp học từ localStorage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    // Xóa khóa học
    courses = courses.filter(course => course.codeCourse !== courseToDelete);

    // Lưu lại vào localStorage và làm mới bảng
    localStorage.setItem('courses', JSON.stringify(courses));
    renderTable(courses); // Làm mới bảng
    updatePagination(); // Cập nhật phân trang

    // Đóng modal và reset biến
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('modal-course-delete'));
    if (deleteModal) {
        deleteModal.hide();
    }
    courseToDelete = null;
}

// Thêm sự kiện cho tất cả các nút "Xóa" trong bảng
function addDeleteEvent() {
    document.querySelectorAll('.main-course-delete').forEach(button => {
        button.removeEventListener('click', showDeleteModal); // Loại bỏ sự kiện cũ
        button.addEventListener('click', showDeleteModal);  // Gán lại sự kiện mới
    });
}
