import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="logo" />
      <h3 className="user-container">
        Welcome
        <span id="returning-user" />
        <span id="user" />
      </h3>
    </div>
  );
};

export default Navbar;
