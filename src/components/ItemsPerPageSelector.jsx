import React from "react";
import { Dropdown } from "react-bootstrap";

const ItemsPerPageSelector = ({ quantity, onChange }) => {
  const handleItemClick = (selectedQuantity) => {
    onChange(selectedQuantity);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="items-per-page-dropdown">
        {quantity} items per page
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {[12, 24, 48, 96].map((item) => (
          <Dropdown.Item key={item} onClick={() => handleItemClick(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ItemsPerPageSelector;