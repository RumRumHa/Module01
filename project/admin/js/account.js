['lock_account', 'unlock_account'].forEach(id => {
    fetch(`account_page/${id}.html`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to load ${id}.html`);
            }
            return res.text();
        })
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(error => console.error('Error loading page:', error));
});

let sortField = 'email';
let sortOrder = 'asc'
const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
let searchResults = [...accounts];
const tableTbody = document.querySelector('#accountsTable tbody');
let currentPage = 1;
const itemsPerPage = 10;
let totalPage = Math.ceil(accounts.length / itemsPerPage);
let start = 0;
let end = itemsPerPage;

function renderTable(data) {
    tableTbody.innerHTML = '';
    const pageData = data.slice(start, end);
    pageData.forEach((account, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="center">${start + index + 1}</td>
            <td>${account.email}</td>
            <td>${account.password}</td>
            <td>${account.name}</td>
            <td>${account.status}</td>
            <td class="main-account-lock edit" data-bs-toggle="modal" data-bs-target="#modal-lock-account">Khóa</td>
            <td class="main-account-unlock delete" data-bs-toggle="modal" data-bs-target="#modal-unlock-account">Mở khóa</td>
        `;
        tableTbody.appendChild(row);
    });
    addLockEvent();
    addUnlockEvent();
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
    end = Math.min(start + itemsPerPage, accounts.length);
}
function sortByName(order, field) {

    return [...searchResults].sort((a, b) => {
        let fieldA = a[field] ? a[field].toString().trim().toLowerCase() : '';
        let fieldB = b[field] ? b[field].toString().trim().toLowerCase() : '';

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
    const sortedAccount = sortByName(sortOrder, sortField);
    searchResults = [...sortedAccount]; 
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

    const sortSelect = document.querySelector('.main-account-sort select');
    sortSelect.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        
        if (sortBy === 'emailAccountAsc') {
            sortField = 'email';
            sortOrder = 'asc';
        } else if (sortBy === 'emailAccountDesc') {
            sortField = 'email';
            sortOrder = 'desc';
        } else if (sortBy === 'statusAccountAsc') {
            sortField = 'status';
            sortOrder = 'asc';
        } else if (sortBy === 'statusAccountDesc') {
            sortField = 'status';
            sortOrder = 'desc';
        }
        
        pageNow(1, sortField, sortOrder);
    });

    const searchButton = document.querySelector('#searchButtonAccount');
    const searchInput = document.querySelector('#searchInputAccount');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchAccounts(query);
    });
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.trim();
            searchAccounts(query);
        }
    });

    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const nameAccount = localStorage.getItem("nameAccount");
    accounts.filter(account => {
        if (account.name === nameAccount) {       
            if (account.status === "Đang bị khóa") {
                alert("Tài khoản của bạn vừa bị khóa, vui lòng quay lại trang đăng nhập!");
                localStorage.removeItem('nameAccount');
                window.location.href = "./login_page.html";
            }        
        }
    });

});
function searchAccounts(query) {
    const normalizedQuery = normalizeString(query).trim();

    if (normalizedQuery === '') {
        searchResults = [...accounts];
    } else {
        searchResults = accounts.filter(account => {
            return normalizeString(account.email).includes(normalizedQuery) || 
                   normalizeString(account.name).includes(normalizedQuery) ||
                   normalizeString(account.status).includes(normalizedQuery);
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