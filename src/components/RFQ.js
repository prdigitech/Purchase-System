import React, { useState } from 'react';
import '../styles/style.css';

const RFQ = () => {
  const [rfqData, setRfqData] = useState({
    requisitionId: '',
    vendors: [],
    items: [],
    notes: '',
  });

  const [currentVendor, setCurrentVendor] = useState('');
  const [currentItem, setCurrentItem] = useState({
    description: '',
    quantity: '',
    unit: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRfqData((prevData) => ({
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
    setRfqData((prevData) => ({
      ...prevData,
      items: [...prevData.items, currentItem],
    }));
    setCurrentItem({
      description: '',
      quantity: '',
      unit: '',
      priority: 'Low',
    });
  };

  const addVendor = () => {
    setRfqData((prevData) => ({
      ...prevData,
      vendors: [...prevData.vendors, currentVendor],
    }));
    setCurrentVendor('');
  };

  const handleSubmit = () => {
    alert('RFQ Created Successfully!');
    console.log(rfqData); // Simulate submission
    setRfqData({
      requisitionId: '',
      vendors: [],
      items: [],
      notes: '',
    });
  };

  return (
    <div id="multiStepForm">
      <h1>Request for Quotation (RFQ)</h1>
      <div className="formStep">
        <h2>Create RFQ</h2>

        {/* Link to Requisition */}
        <label htmlFor="requisitionId">Requisition ID:</label>
        <input
          id="requisitionId"
          type="text"
          name="requisitionId"
          value={rfqData.requisitionId}
          onChange={handleChange}
        />

        {/* Add Vendors */}
        <label htmlFor="vendor">Add Vendor:</label>
        <input
          id="vendor"
          type="text"
          name="vendor"
          value={currentVendor}
          onChange={(e) => setCurrentVendor(e.target.value)}
        />
        <button type="button" onClick={addVendor}>
          Add Vendor
        </button>
        <ul>
          {rfqData.vendors.map((vendor, index) => (
            <li key={index}>{vendor}</li>
          ))}
        </ul>

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
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={currentItem.priority}
          onChange={handleItemChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <ul>
          {rfqData.items.map((item, index) => (
            <li key={index}>
              {item.description} - {item.quantity} {item.unit} ({item.priority})
            </li>
          ))}
        </ul>

        {/* Notes Section */}
        <label htmlFor="notes">Additional Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={rfqData.notes}
          onChange={handleChange}
        ></textarea>

        {/* Submit */}
        <button type="button" onClick={handleSubmit}>
          Submit RFQ
        </button>
      </div>
    </div>
  );
};

export default RFQ;
