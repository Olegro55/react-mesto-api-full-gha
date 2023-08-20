import { Route, Routes, Link } from "react-router-dom";
import logoPath from '../images/logo.svg';

function Header({ email, onLogout }) {
    return (
        <header className="header">
            <img className="header__logo" src={logoPath} alt="логотип" />
            <Routes>
                <Route path="/"
                    element={<>
                        <p className="header__email">{email}</p>
                        <button className="header__link" onClick={onLogout}>Выйти</button>
                    </>}
                />

                <Route
                    path="/signup"
                    element={<Link to="/signin" className="header__link">Войти</Link>}
                />

                <Route
                    path="/signin"
                    element={<Link to="/signup" className="header__link">Регистрация</Link>}
                />
            </Routes>
        </header>
    );
}

export default Header;