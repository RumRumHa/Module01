let studentToDelete = null;
let nameStudentToDelete = null;

function showDeleteModal(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        studentToDelete = cells[1].textContent.trim();
        nameStudentToDelete = cells[2].textContent.trim();

        // Cập nhật thông báo trong modal
        const deleteMessage = document.getElementById('deleteMessage');
        deleteMessage.textContent = `Bạn chắc chắn muốn xóa lớp học ${nameStudentToDelete} - ${studentToDelete}?`;

    } else {
        console.log('Không tìm thấy thông tin sinh viên trong dòng.');
    }
}

function deleteStudent() {
    if (!studentToDelete) {
        console.error('Không có sinh viên nào để xóa.');
        return;
    }
    // Lấy danh sách lớp học từ localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    students = students.filter(student => student.codeStudent !== studentToDelete);

    // Lưu lại vào localStorage và làm mới bảng
    localStorage.setItem('students', JSON.stringify(students));
    renderTable(students);
    updatePagination();

    // Đóng modal và reset biến
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('modal-student-delete'));
    if (deleteModal) {
        deleteModal.hide();
    }
    studentToDelete = null;
}

// Thêm sự kiện cho tất cả các nút "Xóa" trong bảng
function addDeleteEvent() {
    document.querySelectorAll('.main-student-delete').forEach(button => {
        button.removeEventListener('click', showDeleteModal);
        button.addEventListener('click', showDeleteModal);
    });
}
