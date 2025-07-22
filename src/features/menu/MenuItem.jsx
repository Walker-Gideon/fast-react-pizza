import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // id,
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className="h-24" />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MenuItem;
