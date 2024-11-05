import React, { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal";
import { login, register } from "../utils/api";

export default function AuthContainer({ setToken }) {

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setError(null); // Clear error on mode switch
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (isLogin) {
      login(form)
        .then((res) => {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken); // Update global token state
          setError(null);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      register(form)
        .then(() => {
          alert("register success");
          setIsLogin(true);
          setError(null);
          setForm({ username: "", password: "" });
        })
        .catch((err) => {
          setError(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <LoginModal
        form={form}
        loading={loading}
        error={error}
        handleChange={handleChange}
        isLogin={isLogin}
        toggleLogin={toggleLogin}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}