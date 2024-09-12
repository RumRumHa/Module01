let accountToLock = null;
let emailAccountToLock = null;

function showLockModal(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        emailAccountToLock = cells[1].textContent.trim();
        accountToLock = cells[3].textContent.trim();

        // Cập nhật thông báo trong modal
        const lockMessage = document.getElementById('lockMessage');
        lockMessage.textContent = `Bạn chắc chắn muốn khóa tài khoản ${accountToLock} - ${emailAccountToLock}?`;

    }
}

function lockAccount() {
    if (!accountToLock) {
        console.error('Không có tài khoản nào để khóa.');
        return;
    }
    // Lấy danh sách tài khoản từ localStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Cập nhật trạng thái của tài khoản
    accounts = accounts.map(account => {
        if (account.email === emailAccountToLock) {
            if (account.status === "Đang hoạt động") {
                return {
                    ...account,
                    status: 'Đang bị khóa'
                };
            } else {
                alert("Bạn đã khóa tài khoản này rồi!");
            }
        }
        return account;
        
    });

    // Lưu lại vào localStorage và làm mới bảng
    localStorage.setItem('accounts', JSON.stringify(accounts));
    renderTable(accounts);
    updatePagination();

    // Đóng modal và reset biến
    const lockModal = bootstrap.Modal.getInstance(document.getElementById('modal-lock-account'));
    if (lockModal) {
        lockModal.hide();
    }
    accountToLock = null;
    window.location.reload()
}

// Thêm sự kiện cho tất cả các nút "Khóa" trong bảng
function addLockEvent() {
    document.querySelectorAll('.main-account-lock').forEach(button => {
        button.removeEventListener('click', showLockModal);
        button.addEventListener('click', showLockModal);
    });
}
