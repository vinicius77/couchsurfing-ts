import { Property } from "../../mockData/properties";
import { loggedUser } from "../../mockData/user";
import "./styles.css";

type PropertyPreview = Pick<Property, "title" | "image" | "price">;

const Card = (props: PropertyPreview) => {
  const { image, title, price } = props;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      {loggedUser.permissions && <p>{price} $ / night</p>}
    </div>
  );
};

export default Card;
