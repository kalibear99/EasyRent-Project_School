import "../../../css/Auth.css";
import MainLayout from "../../Layouts/MainLayout";
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios'; // Předpokládám, že axios je nainstalovaný

const Register = () => {
    const { data, setData, processing, errors, setError, clearErrors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = async (e) => {
        e.preventDefault();
        clearErrors();
        
        try {
            const response = await axios.post("/api/register", {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            });
            
            console.log("Registrace úspěšná:", response.data);
            
            window.location.href = '/';
            
        } catch (error) {
            console.error("Chyba při registraci:", error.response?.data);
            
            if (error.response?.data?.errors) {
                Object.keys(error.response.data.errors).forEach(key => {
                    setError(key, error.response.data.errors[key][0]);
                });
            }
        }
    };

    return (
        <MainLayout>
            <div className="login-container">
                <Head title="Registrace" />
                <div className="login-box">
                    <h2 className="login-title">Vytvořit nový účet zákazníka</h2>
                    <div className="register-underline"></div>

                    <form onSubmit={submit}>
                        <div className="register-name-fields">
                            <div className="register-input-group">
                                <label>Jméno</label>
                                <input
                                    style={{backgroundColor: "#D9D9D9"}}
                                    type="text"
                                    placeholder="Zadejte jméno"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                />
                                {errors.first_name && <p className="error-text">{errors.first_name}</p>}
                            </div>

                            <div className="register-input-group">
                                <label>Příjmení</label>
                                <input
                                    style={{backgroundColor: "#D9D9D9"}}
                                    type="text"
                                    placeholder="Zadejte příjmení"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    required
                                />
                                {errors.last_name && <p className="error-text">{errors.last_name}</p>}
                            </div>
                        </div>

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

                        <label>Potvrdit heslo</label>
                        <input
                            style={{backgroundColor: "#D9D9D9"}}
                            type="password"
                            placeholder="Potvrďte heslo"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        {errors.password_confirmation && <p className="error-text">{errors.password_confirmation}</p>}

                        <button type="submit" className="login-button" disabled={processing}>
                            Vytvořit účet
                        </button>
                    </form>

                    <p className="register-text">
                        Máte už účet? <a href="/login" className="register-link">Přihlaste se</a> zde.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default Register;