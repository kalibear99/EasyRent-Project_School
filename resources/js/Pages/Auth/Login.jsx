import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/Auth.css";
import facebookIcon from "../../../assets/facebook.png";
import googleIcon from "../../../assets/google.png";
import MainLayout from "../../Layouts/MainLayout";
import axios from 'axios';
import { useState } from 'react';

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
            <div className="login-container">
                <Head title="Přihlášení" />

                {loginStatus && <div className="mb-4 text-sm font-medium text-green-600">{loginStatus}</div>}

                <div className="login-box">
                    <h2 className="login-title">Přihlášení zákazníka</h2>
                    <div className="login-underline"></div>

                    <form onSubmit={submit}>
                        <label>Email</label>
                        <input
                            style={{backgroundColor: "#D9D9D9"}}
                            type="email"
                            placeholder="Zadejte email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}

                        <label>Heslo</label>
                        <input
                            style={{backgroundColor: "#D9D9D9"}}
                            type="password"
                            placeholder="Zadejte heslo"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}

                        <div className="remember-me">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                Zapamatovat si mě
                            </label>
                        </div>

                        <div className="forgot-password">
                            {canResetPassword && (
                                <Link href="/forgot-password">Zapomněli jste heslo?</Link>
                            )}
                        </div>

                        <button type="submit" className="login-button" disabled={processing}>
                            Přihlásit se
                        </button>
                    </form>

                    <p className="login-via-text">Přihlásit se přes</p>
                    <div className="social-icons">
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={googleIcon} alt="Google" />
                    </div>

                    <p className="register-text">
                        Pokud u nás ještě nemáte účet, můžete si{" "}
                        <a href="/register" className="register-link">vytvořit účet</a> zde.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;