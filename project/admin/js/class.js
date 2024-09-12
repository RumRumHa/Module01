['edit_class', 'delete_class'].forEach(id => {
    fetch(`class_page/${id}.html`).then(res => res.text()).then(html => document.getElementById(id).innerHTML = html);
});

// const classes = [
//     {codeClass: "C001", nameClass: "HN-JV230508", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C002", nameClass: "ĐN-JS230407", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 22, statusClass: "Hoạt động", courseClass: "Khóa học 2"},
//     {codeClass: "C003", nameClass: "HCM-JV230425", teacherClass: "BìnhBV", descriptionClass: "Java fullstack", quantityClass: 25, statusClass: "Kết thúc", courseClass: "Khóa học 2"},
//     {codeClass: "C004", nameClass: "FK-JV230627", teacherClass: "BìnhBV", descriptionClass: "Frontend", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 3"},
//     {codeClass: "C005", nameClass: "HN-JV230509", teacherClass: "BìnhBV", descriptionClass: "Java fullstack", quantityClass: 18, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C006", nameClass: "HN-JV230510", teacherClass: "BìnhBV", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 3"},
//     {codeClass: "C007", nameClass: "HN-JV230511", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C008", nameClass: "HN-JV230512", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Hoạt động", courseClass: "Khóa học 1"},
//     {codeClass: "C009", nameClass: "HN-JV230513", teacherClass: "BìnhBV", descriptionClass: "Java fullstack", quantityClass: 21, statusClass: "Chờ lớp", courseClass: "Khóa học 3"},
//     {codeClass: "C010", nameClass: "FK-JV230514", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C011", nameClass: "HN-JV230515", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 22, statusClass: "Hoạt động", courseClass: "Khóa học 2"},
//     {codeClass: "C012", nameClass: "ĐN-JV230516", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C013", nameClass: "HN-JV230514", teacherClass: "BìnhBV", descriptionClass: "Frontend", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 2"},
//     {codeClass: "C014", nameClass: "FK-JV230513", teacherClass: "QuangND", descriptionClass: "Backend", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C015", nameClass: "HCM-JV230514", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C016", nameClass: "FK-JV230414", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 20, statusClass: "Hoạt động", courseClass: "Khóa học 3"},
//     {codeClass: "C017", nameClass: "FK-JV230515", teacherClass: "BìnhBV", descriptionClass: "Backend", quantityClass: 20, statusClass: "Kết thúc", courseClass: "Khóa học 1"},
//     {codeClass: "C018", nameClass: "HN-JV230519", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C019", nameClass: "HCM-JV230519", teacherClass: "AnNV", descriptionClass: "Javascript", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 4"},
//     {codeClass: "C020", nameClass: "HN-JV230614", teacherClass: "BìnhBV", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Chờ lớp", courseClass: "Khóa học 1"},
//     {codeClass: "C021", nameClass: "HCM-JV230614", teacherClass: "QuangND", descriptionClass: "Java fullstack", quantityClass: 20, statusClass: "Kết thúc", courseClass: "Khóa học 6"},
// ]
// localStorage.setItem('classes', JSON.stringify(classes));

let sortField = 'nameClass';
let sortOrder = 'asc'
const classes = JSON.parse(localStorage.getItem('classes')) || [];
let searchResults = [...classes];
const tableTbody = document.querySelector('#classesTable tbody');
let currentPage = 1;
const itemsPerPage = 10;
let totalPage = Math.ceil(classes.length / itemsPerPage);
let start = 0;
let end = itemsPerPage;
let isFirstLoad = true;

function renderTable(data) {
    tableTbody.innerHTML = '';
    const pageData = data.slice(start, end);
    pageData.forEach((classe, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="center">${start + index + 1}</td>
            <td>${classe.codeClass}</td>
            <td>${classe.nameClass}</td>
            <td>${classe.teacherClass}</td>
            <td>${classe.descriptionClass}</td>
            <td>${classe.quantityClass}</td>
            <td>${classe.statusClass}</td>
            <td>${classe.courseClass}</td>
            <td class="main-class-edit edit" data-bs-toggle="modal" data-bs-target="#modal-class-edit">Sửa</td>
            <td class="main-class-delete delete" data-bs-toggle="modal" data-bs-target="#modal-class-delete">Xóa</td>
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
                pageNow(currentPage - 1, sortField, sortOrder);
            } else if (text === 'Next' && currentPage < totalPage) {
                pageNow(currentPage + 1, sortField, sortOrder);
            } else if (!isNaN(parseInt(text))) {
                pageNow(parseInt(text), sortField, sortOrder);
            }
        });
    });
}

function pageNow(choosePage, field = sortField, order = sortOrder) {     
    currentPage = choosePage;
    updateStartEnd();
    const sortedResults = sortByName(order, field);
    renderTable(sortedResults);
    updatePagination();
}
function updateStartEnd() {
    start = (currentPage - 1) * itemsPerPage;
    end = Math.min(start + itemsPerPage, classes.length);
}

function sortByName(order, field) {
    return [...searchResults].sort((a, b) => {
        let fieldA = a[field] ? a[field].toString().trim().toLowerCase() : '';
        let fieldB = b[field] ? b[field].toString().trim().toLowerCase() : '';

        // Nếu sắp xếp theo trạng thái, chuyển đổi trạng thái thành số để so sánh
        if (field === 'statusClass') {
            const statusValue = (status) => {
                switch(status) {
                    case 'chờ lớp': return 1;
                    case 'hoạt động': return 2;
                    case 'kết thúc': return 3;
                    default: return 4; // Nếu có trạng thái khác
                }
            };
            
            fieldA = statusValue(fieldA);
            fieldB = statusValue(fieldB);
        }

        // Sắp xếp tăng dần hoặc giảm dần
        if (order === 'asc') {
            return fieldA > fieldB ? 1 : -1;
        } else if (order === 'desc') {
            return fieldA < fieldB ? 1 : -1;
        }
        return 0;
    });
}

function initialize() {
    const sortedClasses = sortByName(sortOrder, sortField); 
    searchResults = [...sortedClasses]; 
    currentPage = 1;
    totalPage = Math.ceil(searchResults.length / itemsPerPage);
    updateStartEnd();
    renderTable(searchResults);

    if (totalPage > 1) {
        updatePagination();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initialize();

    const sortSelect = document.querySelector('.main-class-sort select');
    sortSelect.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        
        if (sortBy === 'nameClassAsc') {
            sortField = 'nameClass';
            sortOrder = 'asc';
        } else if (sortBy === 'nameClassDesc') {
            sortField = 'nameClass';
            sortOrder = 'desc';
        } else if (sortBy === 'statusClassAsc') {
            sortField = 'statusClass';
            sortOrder = 'asc';
        } else if (sortBy === 'statusClassDesc') {
            sortField = 'statusClass';
            sortOrder = 'desc';
        }
        
        pageNow(1, sortField, sortOrder);
    });

    const searchButton = document.querySelector('#searchButtonClass');
    const searchInput = document.querySelector('#searchInputClass');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchClasses(query);
    });
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();
            searchClasses(query);
        }
    });
});

function searchClasses(query) {
    const normalizedQuery = normalizeString(query).trim();
    if (normalizedQuery === '') {
        searchResults = [...classes];
    } else {
        searchResults = classes.filter(classe => {
            return normalizeString(classe.nameClass).includes(normalizedQuery);
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