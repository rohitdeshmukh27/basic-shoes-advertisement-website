import brand_logo from "basic-shoes-advertisement-website/src/assets/brand_logo.png";

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src={brand_logo} alt="Nike Logo" />
        </div>

        <ul>
          <li href="#" className="nav-text-animation">
            Menu
          </li>
          <li href="#" className="nav-text-animation">
            Location
          </li>
          <li href="#" className="nav-text-animation">
            About
          </li>
          <li href="#" className="nav-text-animation">
            Contact
          </li>
        </ul>

        <button className="login-button">Login</button>
      </nav>
    </div>
  );
};
export default Navigation;
