import { location } from "../../mockData/location";
import "./styles.css";

const Footer = () => {
  const [city, date, degrees] = location;
  return (
    <div className="footer">
      {city} - {date} - {degrees}°C
    </div>
  );
};

export default Footer;
