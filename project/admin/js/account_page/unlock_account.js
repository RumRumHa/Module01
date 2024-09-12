let accountToUnlock = null;
let emailAccountToUnlock = null;

function showUnlockModal(event) {
    event.preventDefault();
    const td = event.target;
    const row = td.closest('tr');
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
        emailAccountToUnlock = cells[1].textContent.trim();
        accountToUnlock = cells[3].textContent.trim();

        // Cập nhật thông báo trong modal
        const unlockMessage = document.getElementById('unlockMessage');
        unlockMessage.textContent = `Bạn chắc chắn muốn mở khóa tài khoản ${accountToUnlock} - ${emailAccountToUnlock}?`;

    }
}

function unlockAccount() {
    if (!accountToUnlock) {
        console.error('Không có tài khoản nào để mở khóa.');
        return;
    }
    // Lấy danh sách tài khoản từ localStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Cập nhật trạng thái của tài khoản
    accounts = accounts.map(account => {
        if (account.email === emailAccountToUnlock) {
            if (account.status === "Đang bị khóa") {
                return {
                    ...account,
                    status: 'Đang hoạt động'
                };
            } else {
                alert("Bạn đã mở khóa tài khoản này rồi!");
            }
        }
        return account;
    });

    // Lưu lại vào localStorage và làm mới bảng
    localStorage.setItem('accounts', JSON.stringify(accounts));
    renderTable(accounts);
    updatePagination();

    // Đóng modal và reset biến
    const unlockModal = bootstrap.Modal.getInstance(document.getElementById('modal-unlock-account'));
    if (unlockModal) {
        unlockModal.hide();
    }
    accountToUnlock = null;
    window.location.reload();
}

// Thêm sự kiện cho tất cả các nút "Mở khóa" trong bảng
function addUnlockEvent() {
    document.querySelectorAll('.main-account-unlock').forEach(button => {
        button.removeEventListener('click', showUnlockModal);
        button.addEventListener('click', showUnlockModal);
    });
}
