import { Outlet, Link } from "react-router-dom";

import './Layout.css';

const Layout = () => {
  return (
    <div>
        <div className="sidebar">
        <nav>
            <ul>
            <li className="home-link link" key="home-button">
                <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to="/">
                Home
                </Link>
            </li>
            <li className="link">
              <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to="/create">
                Create a Crewmate
              </Link>
            </li>
            <li className="link">
              <Link style={{ color: "rgba(255, 255, 255, 0.87)", textDecoration: "none"}} to="/gallery">
                Crewmate Gallery
              </Link>
            </li>
            </ul>
        </nav>
        </div>
        <div className="whole-page">
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;
