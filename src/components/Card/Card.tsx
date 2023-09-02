import { Property } from "../../mockData/properties";
import "./styles.css";

type PropertyPreview = Pick<Property, "title" | "image">;

const Card = (props: PropertyPreview) => {
  const { image, title } = props;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
