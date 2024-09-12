['edit_student', 'delete_student'].forEach(id => {
    fetch(`student_page/${id}.html`).then(res => res.text()).then(html => document.getElementById(id).innerHTML = html);
});

// const students = [
//     {codeStudent: 'SV001', nameStudent: 'Nguyễn Văn A', yearOfBirth: '2000', addressStudent: 'Hà Nội', emailStudent: 'nguyenvana@gmail.com', phoneStudent: 372201504, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV002', nameStudent: 'Nguyễn Văn B', yearOfBirth: '2001', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvanb@gmail.com', phoneStudent: 372201505, genderStudent: 'female', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV003', nameStudent: 'Nguyễn Văn C', yearOfBirth: '2002', addressStudent: 'Đà Nẵng', emailStudent: 'nguyenvanc@gmail.com', phoneStudent: 372201506, genderStudent: 'male', statusStudent: 'Đang học', classStudent: 'HN-JV230508'},
//     {codeStudent: 'SV004', nameStudent: 'Nguyễn Văn D', yearOfBirth: '2000', addressStudent: 'Hà Nội', emailStudent: 'nguyenvand@gmail.com', phoneStudent: 372201507, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV005', nameStudent: 'Nguyễn Văn E', yearOfBirth: '2000', addressStudent: 'Đà Nẵng', emailStudent: 'nguyenvane@gmail.com', phoneStudent: 372201508, genderStudent: 'female', statusStudent: 'Bảo lưu', classStudent: 'HN-JV230508'},
//     {codeStudent: 'SV006', nameStudent: 'Nguyễn Văn F', yearOfBirth: '2002', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvanf@gmail.com', phoneStudent: 372201509, genderStudent: 'male', statusStudent: 'Tốt nghiệp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV007', nameStudent: 'Nguyễn Văn G', yearOfBirth: '2000', addressStudent: 'Hà Nội', emailStudent: 'nguyenvang@gmail.com', phoneStudent: 372201510, genderStudent: 'female', statusStudent: 'Tốt nghiệp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV008', nameStudent: 'Nguyễn Văn H', yearOfBirth: '2000', addressStudent: 'Đà Nẵng', emailStudent: 'nguyenvanh@gmail.com', phoneStudent: 372201511, genderStudent: 'male', statusStudent: 'Đang học', classStudent: 'HN-JV230508'},
//     {codeStudent: 'SV009', nameStudent: 'Nguyễn Văn I', yearOfBirth: '2001', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvani@gmail.com', phoneStudent: 372201512, genderStudent: 'male', statusStudent: 'Tốt nghiệp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV010', nameStudent: 'Nguyễn Văn J', yearOfBirth: '2000', addressStudent: 'Hà Nội', emailStudent: 'nguyenvanj@gmail.com', phoneStudent: 372201513, genderStudent: 'female', statusStudent: 'Bảo lưu', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV011', nameStudent: 'Nguyễn Văn K', yearOfBirth: '2002', addressStudent: 'Hà Nội', emailStudent: 'nguyenvank@gmail.com', phoneStudent: 372201514, genderStudent: 'female', statusStudent: 'Chờ lớp', classStudent: 'HN-JV230513'},
//     {codeStudent: 'SV012', nameStudent: 'Nguyễn Văn L', yearOfBirth: '2002', addressStudent: 'Hà Nội', emailStudent: 'nguyenvanl@gmail.com', phoneStudent: 372201515, genderStudent: 'male', statusStudent: 'Đang học', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV013', nameStudent: 'Nguyễn Văn M', yearOfBirth: '2001', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvanm@gmail.com', phoneStudent: 372201516, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV014', nameStudent: 'Nguyễn Văn N', yearOfBirth: '2000', addressStudent: 'Hà Nội', emailStudent: 'nguyenvann@gmail.com', phoneStudent: 372201517, genderStudent: 'male', statusStudent: 'Đình chỉ', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV015', nameStudent: 'Nguyễn Văn O', yearOfBirth: '2000', addressStudent: 'Đà Nẵng', emailStudent: 'nguyenvano@gmail.com', phoneStudent: 372201518, genderStudent: 'female', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV016', nameStudent: 'Nguyễn Văn P', yearOfBirth: '2001', addressStudent: 'Hà Nội', emailStudent: 'nguyenvanp@gmail.com', phoneStudent: 372201519, genderStudent: 'female', statusStudent: 'Đang học', classStudent: 'HN-JV230513'},
//     {codeStudent: 'SV017', nameStudent: 'Nguyễn Văn Q', yearOfBirth: '2000', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvanq@gmail.com', phoneStudent: 372201520, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV018', nameStudent: 'Nguyễn Văn R', yearOfBirth: '2002', addressStudent: 'Đà Nẵng', emailStudent: 'nguyenvanr@gmail.com', phoneStudent: 372201521, genderStudent: 'male', statusStudent: 'Đang học', classStudent: 'HN-JV230513'},
//     {codeStudent: 'SV019', nameStudent: 'Nguyễn Văn S', yearOfBirth: '2000', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvans@gmail.com', phoneStudent: 372201522, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'HN-JV230513'},
//     {codeStudent: 'SV020', nameStudent: 'Nguyễn Văn T', yearOfBirth: '2001', addressStudent: 'Hà Nội', emailStudent: 'nguyenvant@gmail.com', phoneStudent: 372201523, genderStudent: 'male', statusStudent: 'Tốt nghiệp', classStudent: 'ĐN-JS230407'},
//     {codeStudent: 'SV021', nameStudent: 'Nguyễn Văn U', yearOfBirth: '2000', addressStudent: 'Hồ Chí Minh', emailStudent: 'nguyenvanu@gmail.com', phoneStudent: 372201524, genderStudent: 'male', statusStudent: 'Chờ lớp', classStudent: 'HN-JV230513'},
//     {codeStudent: 'SV022', nameStudent: 'Nguyễn Văn V', yearOfBirth: '2002', addressStudent: 'Hà Nội', emailStudent: 'nguyenvanv@gmail.com', phoneStudent: 372201525, genderStudent: 'male', statusStudent: 'Đình chỉ', classStudent: 'ĐN-JS230407'},
// ];
// localStorage.setItem('students', JSON.stringify(students));

let sortField = 'nameStudent';
let sortOrder = 'asc';
const students = JSON.parse(localStorage.getItem('students')) || [];
let searchResults = [...students];
const tableTbody = document.querySelector('#studentsTable tbody');
let currentPage = 1;
const itemsPerPage = 10;
let totalPage = Math.ceil(students.length / itemsPerPage);
let start = 0;
let end = itemsPerPage;

function renderTable(data) {
    tableTbody.innerHTML = '';
    const pageData = data.slice(start, end);
    pageData.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="center" style="display: table-cell;">${start + index + 1}</td>
            <td style="display: table-cell;">${student.codeStudent}</td>
            <td style="display: table-cell;">${student.nameStudent}</td>
            <td style="display: table-cell;">${student.yearOfBirth}</td>
            <td style="display: table-cell;">${student.addressStudent}</td>
            <td style="display: none;">${student.emailStudent}</td>
            <td style="display: none;">${student.phoneStudent}</td>
            <td style="display: none;">${student.genderStudent}</td>
            <td style="display: table-cell;">${student.statusStudent}</td>
            <td style="display: table-cell;">${student.classStudent}</td>
            <td class="main-student-edit edit" data-bs-toggle="modal" data-bs-target="#modal-student-edit">Sửa</td>
            <td class="main-student-delete delete" data-bs-toggle="modal" data-bs-target="#modal-student-delete">Xóa</td>
        `;
        tableTbody.appendChild(row);
    });
    addDeleteEvent();
    addEditEvent();
}

function updatePagination() {
    totalPage = Math.ceil(searchResults.length / itemsPerPage);
    const pageNumbersDiv = document.querySelector('.pagination');
    let html = '';
    if (totalPage <= 1) {
        pageNumbersDiv.innerHTML = '';
        return;
    }
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}" id="prevPage"><a class="page-link" href="#">Prev</a></li>`;
    let startPage = Math.max(1, currentPage - 1);    
    let endPage = Math.min(totalPage, currentPage + 1);
    if (startPage > 1) {
        html += `<li class="page-item"><a class="page-link" href="#">1</a></li>`;
        if (startPage > 2) {
            html += `<li class="page-item"><span class="page-link">...</span></li>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `<li class="page-item ${i === currentPage ? 'active' : ''}"><a class="page-link" href="#">${i}</a></li>`;
    }

    if (endPage < totalPage) {
        if (endPage < totalPage - 1) {
            html += `<li class="page-item"><span class="page-link">...</span></li>`;
        }
        html += `<li class="page-item"><a class="page-link" href="#">${totalPage}</a></li>`;
    }

    html += `<li class="page-item ${currentPage === totalPage ? 'disabled' : ''}" id="nextPage"><a class="page-link" href="#">Next</a></li>`;

    pageNumbersDiv.innerHTML = html;

    // Gán sự kiện cho các nút phân trang
    pageNumbersDiv.querySelectorAll('li.page-item a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const text = link.textContent;
            if (text === 'Prev' && currentPage > 1) {
                pageNow(currentPage - 1);
            } else if (text === 'Next' && currentPage < totalPage) {
                pageNow(currentPage + 1);
            } else if (!isNaN(parseInt(text))) {
                pageNow(parseInt(text));
            }
        });
    });
}

function pageNow(choosePage) {     
    currentPage = choosePage;
    updateStartEnd();
    const sortedResults = sortByName();
    renderTable(sortedResults);
    updatePagination();
}
function updateStartEnd() {
    start = (currentPage - 1) * itemsPerPage;
    end = Math.min(start + itemsPerPage, students.length);
}

function sortByName() {
    searchResults.sort((a, b) => {
        if (sortField === 'addressStudent') {
            const addressOrder = ['Đà Nẵng', 'Hà Nội', 'Hồ Chí Minh'];
            return addressOrder.indexOf(a[sortField]) - addressOrder.indexOf(b[sortField]);
        }
        if (sortField === 'statusStudent') {
            const statusOrder = ['Bảo lưu', 'Chờ lớp', 'Đang học', 'Đình chỉ', 'Tốt nghiệp'];
            return statusOrder.indexOf(a[sortField]) - statusOrder.indexOf(b[sortField]);
        }
        if (a[sortField] > b[sortField]) {
            return 1;
        } else if (a[sortField] < b[sortField]) {
            return -1;
        }
        return 0;
    });
    return searchResults; 
}

function initialize() {
    const sortedStudents = sortByName();
    searchResults = [...sortedStudents]; 
    currentPage = 1;
    totalPage = Math.ceil(searchResults.length / itemsPerPage);
    updateStartEnd();
    renderTable(searchResults);

    if (totalPage > 1) {
        updatePagination();
    }
}
function adjustTableDisplay() {
    const table = document.querySelector('#studentsTable');
    if (!table) {
        console.error('Table not found');
        return;
    }
    const headers = table.querySelectorAll('thead th');
    headers.forEach((header, index) => {
        if (index < 5) {
            header.style.display = 'table-cell';
        } else if (index >= 5 && index < 8) {
            header.style.display = 'none';
        } else {
            header.style.display = 'table-cell';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initialize();
    adjustTableDisplay();

    const sortSelect = document.querySelector('.main-student-sort select');
    sortSelect.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        
        if (sortBy === 'nameStudent') {
            sortField = 'nameStudent';
        } else if (sortBy === 'addressStudent') {
            sortField = 'addressStudent';
        } else if (sortBy === 'statusStudent') {
            sortField = 'statusStudent';
        }
        sortByName();
        pageNow(1);
    });

    const searchButton = document.querySelector('#searchButtonStudent');
    const searchInput = document.querySelector('#searchInputStudent');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchStudents(query);
    });
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();
            searchStudents(query);
        }
    });
});

function searchStudents(query) {
    const normalizedQuery = normalizeString(query).trim();

    if (normalizedQuery === '') {
        searchResults = [...students];
    } else {
        searchResults = students.filter(student => {
            return normalizeString(student.codeStudent).includes(normalizedQuery) ||
            normalizeString(student.nameStudent).includes(normalizedQuery) ||
            normalizeString(student.yearOfBirth.toString()).includes(normalizedQuery) ||
            normalizeString(student.statusStudent).includes(normalizedQuery) ||
            normalizeString(student.classStudent).includes(normalizedQuery);
        });
    }
    currentPage = 1;
    totalPage = Math.ceil(searchResults.length / itemsPerPage);
    updateStartEnd();
    renderTable(searchResults);
    updatePagination();
}

function normalizeString(str) {
    return str.toLowerCase().replace(/[^\w\s]/gi, '');
}