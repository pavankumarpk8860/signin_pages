// Import necessary dependencies
import React, { useState } from 'react';
import "./App.css"

// Define the Login component
const Login = () => {
  // State to manage form input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., check credentials)
    // For simplicity, a basic check is done here
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // JSX for the Login component
  return (
    <div>
      {isLoggedIn ? (
        // Display welcome message if logged in
        <p>Welcome, {username}!</p>
      ) : (
        // Display login form if not logged in
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <button type='submit'>signup</button>
        </form>
      )}
    </div>
  );
};

// Export the Login component
export default Login;
