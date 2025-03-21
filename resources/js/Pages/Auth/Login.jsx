import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/Auth.css";
import MainLayout from "../../Layouts/MainLayout";
import axios from 'axios';
import { useState } from 'react';
import "../../../css/app.css";

const Login = ({ status, canResetPassword }) => {
    const { data, setData, processing, errors, setError, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [loginStatus, setLoginStatus] = useState(status || '');

    const submit = async (e) => {
        e.preventDefault();
        clearErrors();
        
        try {
            const response = await axios.post("/api/login", {
                email: data.email,
                password: data.password,
                remember: data.remember
            });
            
            console.log("Přihlášení úspěšné:", response.data);
            
            if (response.data.token) {
                localStorage.setItem('auth_token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            }
            
            setLoginStatus('Přihlášení proběhlo úspěšně');
            
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
            
        } catch (error) {
            console.error("Chyba při přihlášení:", error.response?.data);
            if (error.response?.data?.errors) {
                Object.keys(error.response.data.errors).forEach(key => {
                    setError(key, error.response.data.errors[key][0]);
                });
            } else if (error.response?.data?.message) {
                setError('email', error.response.data.message);
            } else {
                setLoginStatus('Přihlášení se nezdařilo. Zkontrolujte své údaje.');
            }
        }
    };

    return (
        <MainLayout>
            <div className="auth-login-container">
                <Head title="Přihlášení" />

                {loginStatus && <div className="auth-message">{loginStatus}</div>}

                <div className="auth-login-box">
                    <h2 className="auth-login-title">Přihlášení zákazníka</h2>
                    <div className="auth-login-underline"></div>

                    <form onSubmit={submit}>
                        <label>Email</label>
                        <input
                            className="auth-input"
                            type="email"
                            placeholder="Zadejte email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        {errors.email && <p className="auth-error-text">{errors.email}</p>}

                        <label>Heslo</label>
                        <input
                            className="auth-input"
                            type="password"
                            placeholder="Zadejte heslo"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        {errors.password && <p className="auth-error-text">{errors.password}</p>}

                        <div className="auth-forgot-password">
                            {canResetPassword && (
                                <Link href="/forgot-password">Zapomněli jste heslo?</Link>
                            )}
                        </div>

                        <button type="submit" className="auth-login-button" disabled={processing}>
                            Přihlásit se
                        </button>
                    </form>

                    <p className="auth-register-text">
                        Pokud u nás ještě nemáte účet, můžete si{" "}
                        <a href="/register" className="auth-register-link">vytvořit účet</a> zde.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;
