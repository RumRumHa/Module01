['edit_course', 'delete_course'].forEach(id => {
    fetch(`course_page/${id}.html`).then(res => res.text()).then(html => document.getElementById(id).innerHTML = html);
});

// const courses = [
//     { id: 1, codeCourse: 'RA01', nameCourse: 'Khóa học 1', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 2, codeCourse: 'RA02', nameCourse: 'Khóa học 2', timeCourse: 2000, statusCourse: 'Không hoạt động' },
//     { id: 3, codeCourse: 'RA03', nameCourse: 'Khóa học 3', timeCourse: 1500, statusCourse: 'Hoạt động' },
//     { id: 4, codeCourse: 'RA04', nameCourse: 'Khóa học 4', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 5, codeCourse: 'RA05', nameCourse: 'Khóa học 5', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 6, codeCourse: 'RA06', nameCourse: 'Khóa học 6', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 7, codeCourse: 'RA07', nameCourse: 'Khóa học 7', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 8, codeCourse: 'RA08', nameCourse: 'Khóa học 8', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 9, codeCourse: 'RA09', nameCourse: 'Khóa học 9', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 10, codeCourse: 'RA10', nameCourse: 'Khóa học 10', timeCourse: 1000, statusCourse: 'Không hoạt động' },
//     { id: 11, codeCourse: 'RB01', nameCourse: 'Khóa học 11', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 12, codeCourse: 'RB02', nameCourse: 'Khóa học 12', timeCourse: 1100, statusCourse: 'Hoạt động' },
//     { id: 13, codeCourse: 'RB03', nameCourse: 'Khóa học 13', timeCourse: 1300, statusCourse: 'Không hoạt động' },
//     { id: 14, codeCourse: 'RB04', nameCourse: 'Khóa học 14', timeCourse: 1600, statusCourse: 'Hoạt động' },
//     { id: 15, codeCourse: 'RB05', nameCourse: 'Khóa học 15', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 16, codeCourse: 'RB06', nameCourse: 'Khóa học 16', timeCourse: 1000, statusCourse: 'Không hoạt động' },
//     { id: 17, codeCourse: 'RB07', nameCourse: 'Khóa học 17', timeCourse: 1100, statusCourse: 'Hoạt động' },
//     { id: 18, codeCourse: 'RB08', nameCourse: 'Khóa học 18', timeCourse: 800, statusCourse: 'Hoạt động' },
//     { id: 19, codeCourse: 'RB09', nameCourse: 'Khóa học 19', timeCourse: 1200, statusCourse: 'Không hoạt động' },
//     { id: 20, codeCourse: 'RB10', nameCourse: 'Khóa học 20', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 21, codeCourse: 'RC01', nameCourse: 'Khóa học 21', timeCourse: 1500, statusCourse: 'Không hoạt động' },
//     { id: 22, codeCourse: 'RC02', nameCourse: 'Khóa học 22', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 23, codeCourse: 'RC03', nameCourse: 'Khóa học 23', timeCourse: 1500, statusCourse: 'Hoạt động' },
//     { id: 24, codeCourse: 'RC04', nameCourse: 'Khóa học 24', timeCourse: 900, statusCourse: 'Hoạt động' },
//     { id: 25, codeCourse: 'RC05', nameCourse: 'Khóa học 25', timeCourse: 1000, statusCourse: 'Không hoạt động' },
//     { id: 26, codeCourse: 'RC06', nameCourse: 'Khóa học 26', timeCourse: 1100, statusCourse: 'Hoạt động' },
//     { id: 27, codeCourse: 'RC07', nameCourse: 'Khóa học 27', timeCourse: 1100, statusCourse: 'Không hoạt động' },
//     { id: 28, codeCourse: 'RC08', nameCourse: 'Khóa học 28', timeCourse: 1000, statusCourse: 'Không hoạt động' },
//     { id: 29, codeCourse: 'RC09', nameCourse: 'Khóa học 29', timeCourse: 1100, statusCourse: 'Hoạt động' },
//     { id: 30, codeCourse: 'RC10', nameCourse: 'Khóa học 30', timeCourse: 900, statusCourse: 'Không hoạt động' },
//     { id: 31, codeCourse: 'RD01', nameCourse: 'Khóa học 31', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 32, codeCourse: 'RD02', nameCourse: 'Khóa học 32', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 33, codeCourse: 'RD03', nameCourse: 'Khóa học 33', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 34, codeCourse: 'RD04', nameCourse: 'Khóa học 34', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 35, codeCourse: 'RD05', nameCourse: 'Khóa học 35', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 36, codeCourse: 'RD06', nameCourse: 'Khóa học 36', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 37, codeCourse: 'RD07', nameCourse: 'Khóa học 37', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 38, codeCourse: 'RD08', nameCourse: 'Khóa học 38', timeCourse: 1200, statusCourse: 'Không hoạt động' },
//     { id: 39, codeCourse: 'RD09', nameCourse: 'Khóa học 39', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 40, codeCourse: 'RD10', nameCourse: 'Khóa học 40', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 41, codeCourse: 'RE01', nameCourse: 'Khóa học 41', timeCourse: 1200, statusCourse: 'Hoạt động' },
//     { id: 42, codeCourse: 'RE02', nameCourse: 'Khóa học 42', timeCourse: 1200, statusCourse: 'Không hoạt động' },
//     { id: 43, codeCourse: 'RE03', nameCourse: 'Khóa học 43', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 44, codeCourse: 'RE04', nameCourse: 'Khóa học 44', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 45, codeCourse: 'RE05', nameCourse: 'Khóa học 45', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 46, codeCourse: 'RE06', nameCourse: 'Khóa học 46', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 47, codeCourse: 'RE07', nameCourse: 'Khóa học 47', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 48, codeCourse: 'RE08', nameCourse: 'Khóa học 48', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 49, codeCourse: 'RE09', nameCourse: 'Khóa học 49', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 50, codeCourse: 'RE10', nameCourse: 'Khóa học 50', timeCourse: 1000, statusCourse: 'Hoạt động' },
//     { id: 51, codeCourse: 'RF01', nameCourse: 'Khóa học 51', timeCourse: 1000, statusCourse: 'Hoạt động' },
// ];
// localStorage.setItem('courses', JSON.stringify(courses));

let sortOrder = 'asc';
const courses = JSON.parse(localStorage.getItem('courses')) || [];
let searchResults = [...courses];
const tableTbody = document.querySelector('#coursesTable tbody');
let currentPage = 1;
const itemsPerPage = 10;
let totalPage = Math.ceil(courses.length / itemsPerPage);
let start = 0;
let end = itemsPerPage;

function renderTable(data) {
    tableTbody.innerHTML = '';
    const pageData = data.slice(start, end);
    pageData.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="center">${start + index + 1}</td>
            <td>${course.codeCourse}</td>
            <td>${course.nameCourse}</td>
            <td>${course.timeCourse}</td>
            <td>${course.statusCourse}</td>
            <td class="main-course-edit edit" data-bs-toggle="modal" data-bs-target="#modal-course-edit">Sửa</td>
            <td class="main-course-delete delete" data-bs-toggle="modal" data-bs-target="#modal-course-delete">Xóa</td>
        `;
        tableTbody.appendChild(row);
    });  
    addDeleteEvent();  
    addEditEvent();
}

function updatePagination() {
    if (searchResults.length <= 10) {
        document.querySelector('.pagination').innerHTML = '';
        return;
    }
    totalPage = Math.ceil(searchResults.length / itemsPerPage);
    const pageNumbersDiv = document.querySelector('.pagination');
    let html = '';
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
    const sortedResults = sortByName(sortOrder);
    renderTable(sortedResults);
    updatePagination();
}
function updateStartEnd() {
    start = (currentPage - 1) * itemsPerPage;
    end = currentPage * itemsPerPage;
}

function sortByName(order) {
    sortOrder = order;
    return [...searchResults].sort((a, b) => {
        const nameA = a.nameCourse.toLowerCase();
        const nameB = b.nameCourse.toLowerCase();
        const extractNumber = str => {
            const match = str.match(/(\d+)/);
            return match ? parseInt(match[0], 10) : 0;
        };
        const numA = extractNumber(nameA);
        const numB = extractNumber(nameB);
        if (order === 'asc') {
            return numA - numB || nameA.localeCompare(nameB);
        } else if (order === 'desc') {
            return numB - numA || nameB.localeCompare(nameA);
        }
        return 0;
    });
}

function initialize() {
    const sortedCourses = sortByName(sortOrder);
    searchResults = [...sortedCourses]; 
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

    const sortSelect = document.querySelector('.main-course-sort select');
    sortSelect.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        if (sortBy === 'nameCourseAsc') {
            sortByName('asc');
        } else if (sortBy === 'nameCourseDesc') {
            sortByName('desc');
        }
        pageNow(currentPage);
    });

    const searchButton = document.querySelector('#searchButtonCourse');
    const searchInput = document.querySelector('#searchInputCourse');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchCourses(query);
    });
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();
            searchCourses(query);
        }
    });
});

function searchCourses(query) {
    const normalizedQuery = normalizeString(query).trim();

    if (normalizedQuery === '') {
        searchResults = [...courses];
    } else {
        searchResults = courses.filter(course => {
            return normalizeString(course.codeCourse).includes(normalizedQuery) || 
                   normalizeString(course.nameCourse).includes(normalizedQuery) ||
                   normalizeString(course.timeCourse.toString()).includes(normalizedQuery) ||
                   normalizeString(course.statusCourse).includes(normalizedQuery)
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
