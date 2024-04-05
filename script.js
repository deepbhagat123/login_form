document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
  
    // Reset error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';
  
    // Validation
    var isValid = true;
  
    if (username === '') {
      document.getElementById('username-error').textContent = 'Username is required';
      isValid = false;
    } else if (username.length < 5) {
      document.getElementById('username-error').textContent = 'Username must be at least 5 characters';
      isValid = false;
    }
  
    if (password === '') {
      document.getElementById('password-error').textContent = 'Password is required';
      isValid = false;
    } else if (password.length < 5) {
      document.getElementById('password-error').textContent = 'Password must be at least 5 characters';
      isValid = false;
    }
  
    if (isValid) {
      // Simulate login functionality
      // Here you can send a request to your server for authentication
      alert('Login successful!'); // Just an example, you can replace this with your logic
    }
  });
  