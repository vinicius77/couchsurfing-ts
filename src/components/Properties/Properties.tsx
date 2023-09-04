import { properties } from "../../mockData/properties";
import { Card } from "../Card";

const Properties = () => {
  return (
    <div>
      <h3>Other Properties recommended to you:</h3>
      <div className="flex">
        {properties.map(({ image, title, price }) => (
          <Card key={image} image={image} title={title} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
