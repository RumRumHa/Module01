let classToDelete = null;
let nameClassToDelete = null;

function showDeleteModal(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        classToDelete = cells[1].textContent.trim();
        nameClassToDelete = cells[2].textContent.trim();

        // Cập nhật thông báo trong modal
        const deleteMessage = document.getElementById('deleteMessage');
        deleteMessage.textContent = `Bạn chắc chắn muốn xóa lớp học ${nameClassToDelete} - ${classToDelete}?`;

    } else {
        console.log('Không tìm thấy thông tin lớp học trong dòng.');
    }
}

function deleteClass() {
    if (!classToDelete) {
        console.error('Không có lớp học nào để xóa.');
        return;
    }
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const isLinkedClass = students.some(student => student.classStudent === nameClassToDelete);
    if (isLinkedClass) {
        alert(`Không thể xóa ${nameClassToDelete} - ${classToDelete} vì đã có sinh viên liên kết.`);
        
        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('modal-class-delete'));
        if (deleteModal) {
            deleteModal.hide();
        }
        return;
    }

    // Lấy danh sách lớp học từ localStorage
    let classes = JSON.parse(localStorage.getItem('classes')) || [];

    classes = classes.filter(classe => classe.codeClass !== classToDelete);

    // Lưu lại vào localStorage và làm mới bảng
    localStorage.setItem('classes', JSON.stringify(classes));
    renderTable(classes); // Làm mới bảng
    updatePagination();
    window.location.reload();

    // Đóng modal và reset biến
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('modal-class-delete'));
    if (deleteModal) {
        deleteModal.hide();
    }
    classToDelete = null;
}

// Thêm sự kiện cho tất cả các nút "Xóa" trong bảng
function addDeleteEvent() {
    document.querySelectorAll('.main-class-delete').forEach(button => {
        button.removeEventListener('click', showDeleteModal);
        button.addEventListener('click', showDeleteModal);
    });
}
