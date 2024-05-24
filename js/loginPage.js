import { doFetch } from '../doFetch.mjs';

async function loginUser(credentials) {
    const url = `${API_BASE_URL}/auth/login`;
    return await doFetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) });
}

async function initLoginPage() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const credentials = {
            email: form.email.value,
            password: form.password.value,
        };
        try {
            const response = await loginUser(credentials);
            if (response.token) {
                localStorage.setItem('token', response.token);
                alert('Login successful!');
                window.location.href = '../index.html';
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            console.error('Failed to login:', error);
            alert('Error logging in.');
        }
    });
}

initLoginPage();
