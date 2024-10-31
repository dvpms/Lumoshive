import React from "react";

export default function LoginModal({
  isLogin,
  toggleLogin,
  handleChange,
  handleSubmit,
  error,
  loading,
  form,
}) {
  return (
    <div>
      <div className="modal show d-block " tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title"> {isLogin ? "Login" : "Register"}</h5>
            </div>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    minLength={6}
                    maxLength={30}
                    name="username"
                    value={form.username}
                    id="username"
                    onChange={handleChange}
                    disabled={loading}
                    className="form-control"
                  />
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    disabled={loading}
                    className="form-control"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-100 mt-2 fw-bold"
                  >
                    <i className="bi bi-shield-lock" />
                    {isLogin ? "Login" : "Register"}
                  </button>
                  <button
                    onClick={toggleLogin}
                    disabled={loading}
                    type="submit"
                    className="btn btn-link w-100 mt-3 text-decoration-none"
                  >
                    {isLogin ? "Register" : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <button type="submit" className="btn btn-primary w-100">
<i className="bi bi-shield-lock" />{" "}
{isLogin ? "Login" : "Register"}
</button>
<button
onClick={toggleLogin}
type="submit"
className="btn btn-link w-100 mt-3 text-decoration-none"
>
{isLogin ? "Register" : "Login"}
</button> */
}
