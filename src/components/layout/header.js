import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { keepTheme, toggleTheme } from "../../utils/theme";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
export default function NavBar() {
  //state
  const history = useHistory();
  const location = useLocation();
  const [navCollapsed, setNavCollapsed] = useState(true);
  const [login, setLogedin] = useState(false);
  //LifeCycles (useEffect hook)
  useEffect(() => {
    setLogedin(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);
  useEffect(() => {
    setLogedin(Boolean(localStorage.getItem("token")));
  }, []);
  useEffect(() => {
    keepTheme();
  });

  //methods
  const handleNavCollapse = () => setNavCollapsed(!navCollapsed);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  //JSX
  return (
    <header className={`container-fluid headerSection `}>
      <nav className={`navbar navbar-expand-lg customNavContainer`}>
        <a className={`navbar-brand navbarBrand`} href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div className="form-check form-switch d-lg-none ms-auto ">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onClick={() => toggleTheme()}
          />
        </div>
        <button
          onClick={handleNavCollapse}
          className={`navbar-toggler icon`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" 
          alt="menu"
          />
        </button>

        <div
          className={`${navCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-lg-auto  ms-lg-5   ">
            <li className={`navItem`}>
              <Link className={`navLink`} to="/">
                Home
              </Link>
            </li>
            <li className={`navItem`}>
              <Link className={`navLink`} to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-lg-auto   ">
            <li className="d-flex align-item-center pt-2">
              <div className="form-check form-switch d-none d-lg-block d-xl-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={() => toggleTheme()}
                />
              </div>
            </li>
            <li className={`navItem`}>
              {login ? (
                <span className={`navLink`} onClick={handleLogout}>
                  Logout
                </span>
              ) : (
                <Link className={`navLink`} to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className={`navItem`}>
              <a
              rel="noreferrer" 
                className={`navLink`}
                target="_blank"
                href="https://splinterlands.com/?ref=dec-factory"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
