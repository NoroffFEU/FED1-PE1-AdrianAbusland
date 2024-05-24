import { doFetch } from '../doFetch.mjs';

async function registerUser(details) {
    const url = `${API_BASE_URL}/auth/register`;
    return await doFetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
    });
}

async function initRegisterPage() {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const details = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };
        try {
            const response = await registerUser(details);
            alert('Registration successful!');
            window.location.href = './login.html';
        } catch (error) {
            console.error('Failed to register:', error);
            alert('Error registering.');
        }
    });
}

initRegisterPage();
