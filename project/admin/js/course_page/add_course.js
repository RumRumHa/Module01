function clearModalData() {
    document.querySelector('#modalCodeCourse').value = '';
    document.querySelector('#modalNameCourse').value = '';
    document.querySelector('#modalTimeCourse').value = '';
    document.querySelector('#activate').checked = true;
}
function addCourse() {
    const codeCourse = document.querySelector('#modalCodeCourse').value.trim();
    const nameCourse = document.querySelector('#modalNameCourse').value.trim();
    const timeCourse = parseInt(document.querySelector('#modalTimeCourse').value.trim(), 10);
    const statusCourse = document.querySelector('#activate').checked ? 'Hoạt động' : 'Không hoạt động';

    if (!codeCourse || !nameCourse) {
        alert('Mã khóa học và tên khóa học là bắt buộc.');
        return;
    }
    if (timeCourse <= 0) {
        alert('Thời gian khóa học phải lớn hơn 0.');
        return;
    }

    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    if (courses.some(course => course.codeCourse === codeCourse)) {
        alert('Mã khóa học đã tồn tại.');
        return;
    }
    if (courses.some(course => course.nameCourse === nameCourse)) {
        alert('Tên khóa học đã tồn tại.');
        return;
    }

    courses.push({
        codeCourse,
        nameCourse,
        timeCourse,
        statusCourse
    });

    localStorage.setItem('courses', JSON.stringify(courses));
    const sortedCourses = sortByName(sortOrder);
    renderTable(sortedCourses);
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.querySelector('#modal-course-add'));
    modal.hide();
    clearModalData();
}
document.addEventListener('DOMContentLoaded', function() {
    const modalAddCourse = document.getElementById('modal-course-add');
    if (modalAddCourse) {
        modalAddCourse.addEventListener('hidden.bs.modal', function () {
            clearModalData();
        });
    }
});
