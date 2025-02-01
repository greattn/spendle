import React from "react";

const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
      <h1>Authentication</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Authenticate</button>
      </form>
    </div>
  );
};

export default AuthPage;
