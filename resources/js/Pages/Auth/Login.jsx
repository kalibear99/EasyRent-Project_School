import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/Auth.css";
import facebookIcon from "../../../assets/facebook.png";
import googleIcon from "../../../assets/google.png";
import MainLayout from "../../Layouts/MainLayout";

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <MainLayout>
            <div className="login-container">
                <Head title="Přihlášení" />

                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

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
                                // <Link href={route('password.request')}>Zapomněli jste heslo?</Link>
                                <Link>Zapomněli jste heslo?</Link>
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