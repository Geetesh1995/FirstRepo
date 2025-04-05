document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy login check
  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    // You can redirect to another page using window.location.href
  } else {
    document.getElementById('errorMsg').textContent = 'Invalid credentials';
  }
});
