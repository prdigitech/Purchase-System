import React, { useState } from 'react';
import '../styles/style.css'; // Reusing the same styling as RFQ page

const CreatePO = () => {
  const [poData, setPoData] = useState({
    rfqId: '',
    vendor: '',
    items: [],
    terms: '',
    notes: '',
  });

  const [currentItem, setCurrentItem] = useState({
    description: '',
    quantity: '',
    unit: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const addItem = () => {
    setPoData((prevData) => ({
      ...prevData,
      items: [...prevData.items, currentItem],
    }));
    setCurrentItem({
      description: '',
      quantity: '',
      unit: '',
      price: '',
    });
  };

  const handleSubmit = () => {
    alert('Purchase Order Created Successfully!');
    console.log(poData); // Simulate submission
    setPoData({
      rfqId: '',
      vendor: '',
      items: [],
      terms: '',
      notes: '',
    });
  };

  return (
    <div id="multiStepForm">
      <h1>Create Purchase Order (PO)</h1>
      <div className="formStep">
        <h2>PO Details</h2>

        {/* Link to RFQ */}
        <label htmlFor="rfqId">RFQ ID:</label>
        <input
          id="rfqId"
          type="text"
          name="rfqId"
          value={poData.rfqId}
          onChange={handleChange}
        />

        {/* Vendor Selection */}
        <label htmlFor="vendor">Vendor:</label>
        <input
          id="vendor"
          type="text"
          name="vendor"
          value={poData.vendor}
          onChange={handleChange}
        />

        {/* Add Items */}
        <label htmlFor="description">Item Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={currentItem.description}
          onChange={handleItemChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={currentItem.quantity}
          onChange={handleItemChange}
        />
        <label htmlFor="unit">Unit:</label>
        <input
          id="unit"
          type="text"
          name="unit"
          value={currentItem.unit}
          onChange={handleItemChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={currentItem.price}
          onChange={handleItemChange}
        />
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <ul>
          {poData.items.map((item, index) => (
            <li key={index}>
              {item.description} - {item.quantity} {item.unit} @ {item.price} per unit
            </li>
          ))}
        </ul>

        {/* Terms and Notes */}
        <label htmlFor="terms">Terms and Conditions:</label>
        <textarea
          id="terms"
          name="terms"
          value={poData.terms}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="notes">Additional Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={poData.notes}
          onChange={handleChange}
        ></textarea>

        {/* Submit */}
        <button type="button" onClick={handleSubmit}>
          Submit PO
        </button>
      </div>
    </div>
  );
};

export default CreatePO;
