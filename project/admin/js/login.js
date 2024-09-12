document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('input[name="user"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const loginButton = document.querySelector('input[type="button"]');

    let accounts = localStorage.getItem('accounts');
    if (!accounts) {
        accounts = [
            {email: 'anv@rikkeiacademy.edu.vn', password: '123456', name: 'Hoàng Văn A', status: 'Đang hoạt động'},
            {email: 'bnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn B', status: 'Đang bị khóa'},
            {email: 'cnv@rikkeiacademy.edu.vn', password: '123456', name: 'Hoàng Văn C', status: 'Đang hoạt động'},
            {email: 'dnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn D', status: 'Đang bị khóa'},
            {email: 'env@rikkeiacademy.edu.vn', password: '123456', name: 'Hoàng Văn E', status: 'Đang hoạt động'},
            {email: 'fnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn F', status: 'Đang bị khóa'},
            {email: 'gnv@rikkeiacademy.edu.vn', password: '123456', name: 'Hoàng Văn G', status: 'Đang hoạt động'},
            {email: 'hnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn H', status: 'Đang bị khóa'},
            {email: 'inv@rikkeiacademy.edu.vn', password: '123456', name: 'Hoàng Văn I', status: 'Đang hoạt động'},
            {email: 'jnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn J', status: 'Đang bị khóa'},
            {email: 'knv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn K', status: 'Đang bị khóa'},
            {email: 'lnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn L', status: 'Đang bị khóa'},
            {email: 'mnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn M', status: 'Đang bị khóa'},
            {email: 'nnv@rikkeiacademy.edu.vn', password: '654321', name: 'Hoàng Văn N', status: 'Đang bị khóa'}
        ];
        localStorage.setItem('accounts', JSON.stringify(accounts));
    } else {
        accounts = JSON.parse(accounts);
    }
    loginButton.addEventListener('click', () => {
        handleLogin();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleLogin();
        }
    });
    function handleLogin() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const account = accounts.find(acc => acc.email === email && acc.password === password);

        if (account) {  
            if (account.status === 'Đang hoạt động') {
                localStorage.setItem('nameAccount', account.name);
                sessionStorage.setItem('isLoggedIn', 'true');
                showMessage('Đăng nhập thành công!', 'success', '../index.html');
            } else {
                showMessage('Tài khoản của bạn đã bị khóa!', 'warning');
            }
        } else if (!email || !password) {
            showMessage('Vui lòng nhập tên đăng nhập và mật khẩu', 'error');
        } else {
            showMessage('Tên đăng nhập hoặc mật khẩu không chính xác!', 'error');
        }
    }
    function showMessage(message, type, redirectUrl) {
        const messageContainer = document.getElementById('messageContainer');
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type} show`;
        messageElement.textContent = message;
        messageContainer.prepend(messageElement);
        setTimeout(() => {
            messageElement.classList.remove('show');
            messageElement.classList.add('hide');
            setTimeout(() => {
                messageContainer.removeChild(messageElement);
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }
            }, 500);
        }, 2000);
    }
});
