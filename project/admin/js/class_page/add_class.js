function clearModalData() {
    document.querySelector('#modalCodeClass').value = '';
    document.querySelector('#modalNameClass').value = '';
    document.querySelector('#modalTeacherClass').value = '';
    document.querySelector('#modalQuantityClass').value = '';
    document.querySelector('#modalDescriptionClass').value = '';
    document.querySelectorAll('input[name="options-outlined-class"]').forEach(radioButton => {
        radioButton.checked = radioButton.id === 'activate';
    });
    document.querySelector('#modalChooseCourse').value = 'chooseCourse';
}
function addClass() {
    const codeClass = document.querySelector('#modalCodeClass').value.trim();
    const nameClass = document.querySelector('#modalNameClass').value.trim();
    const teacherClass = document.querySelector('#modalTeacherClass').value.trim();
    const quantityClass = parseInt(document.querySelector('#modalQuantityClass').value.trim(), 10);
    const descriptionClass = document.querySelector('#modalDescriptionClass').value.trim();
    const statusClass = document.querySelector('#activate').checked 
        ? 'Hoạt động' 
        : document.querySelector('#waiting').checked 
            ? 'Chờ lớp' 
            : 'Kết thúc';
    const courseSelect = document.querySelector('#modalChooseCourse');
    const courseOption = courseSelect.options[courseSelect.selectedIndex];
    const courseClass = courseOption ? courseOption.textContent.trim() : '';

    if (!codeClass || !nameClass || !teacherClass || !descriptionClass || courseSelect.value === 'chooseCourse') {
        alert('Vui lòng điền đầy đủ thông tin và chọn một khóa học hợp lệ.');
        return;
    }
    if (quantityClass <= 0 || isNaN(quantityClass)) {
        alert('Sĩ số phải lớn hơn 0 và là số hợp lệ.');
        return;
    }

    let classes = JSON.parse(localStorage.getItem('classes')) || [];

    if (classes.some(classe => classe.codeClass === codeClass)) {
        alert('Mã lớp học đã tồn tại.');
        return;
    }
    if (classes.some(classe => classe.nameClass === nameClass)) {
        alert('Tên lớp học đã tồn tại.');
        return;
    }

    classes.push({
        codeClass,
        nameClass,
        teacherClass,
        quantityClass,
        descriptionClass,
        statusClass,
        courseClass
    });

    localStorage.setItem('classes', JSON.stringify(classes));
    const sortedClasses = sortByName(sortOrder, sortField);
    renderTable(sortedClasses);
    updatePagination();
    window.location.reload();

    const modal = bootstrap.Modal.getInstance(document.querySelector('#modal-class-add'));
    modal.hide();
    clearModalData();
}
document.addEventListener('DOMContentLoaded', function() {
    const modalAddClass = document.getElementById('modal-class-add');
    console.log(modalAddClass);
    
    if (modalAddClass) {
        modalAddClass.addEventListener('hidden.bs.modal', function () {
            clearModalData();
            console.log('dsadsa');
        });
        modalAddClass.addEventListener('show.bs.modal', function () {
            const courseSelect = document.getElementById('modalChooseCourse');
            const courses = JSON.parse(localStorage.getItem('courses')) || [];
            if (courseSelect) {
                courseSelect.innerHTML = '<option value="chooseCourse" selected disabled>Chọn khóa học</option>';  
                courses.forEach(course => {
                    const option = document.createElement('option');
                    option.value = course.codeCourse;
                    option.textContent = course.nameCourse;
                    courseSelect.appendChild(option);
                });
            }
            console.log('hgfhfch');
        });
    }
});