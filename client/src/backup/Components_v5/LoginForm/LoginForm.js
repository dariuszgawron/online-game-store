import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="container-overlay">
            <div className="form">
                <h4 className="form__header">Logowanie</h4>
                <form className="form__container" onSubmit={LogIn}>
                    <input className="form__input" type="text" placeholder="Login"/>
                    <input className="form__input" type="password" placeholder="Hasło"/>
                    <input className="form__button" type="submit" value="Zaloguj się"/>
                </form>
                <h4 className="form__header">Rejestracja</h4>
                <input className="form__button" type="button" value="Zarejestruj się"/>
            </div>
        </div>
    )
};

const LogIn = (e) => {
    e.preventDefault();
    console.log('ok');
}

export default LoginForm;