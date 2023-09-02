import { loggedUser } from "../../mockData/user";
import "./styles.css";

const Navbar: React.FC = () => {
  const { isReturning, firstName } = loggedUser;

  return (
    <div className="nav-bar">
      <div className="logo" />
      <h3 className="user-container">
        Welcome {isReturning ? "back, " : null}
        <span className="orange">{firstName}</span>
      </h3>
    </div>
  );
};

export default Navbar;
