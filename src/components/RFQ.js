import React, { useState } from 'react';
import '../styles/style.css';

const RFQ = () => {
  const [rfqData, setRfqData] = useState({
    requisitionId: '',
    vendors: [],
    items: [],
    notes: '',
  });

  const [currentVendor, setCurrentVendor] = useState({ name: '', email: '' });
  const [currentItem, setCurrentItem] = useState({
    description: '',
    quantity: '',
    unit: '',
    priority: 'Low',
  });

  const [step, setStep] = useState(1);

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

  const handleVendorChange = (e) => {
    const { name, value } = e.target;
    setCurrentVendor((prevVendor) => ({
      ...prevVendor,
      [name]: value,
    }));
  };

  const addItem = () => {
    if (!currentItem.description || !currentItem.quantity || !currentItem.unit) {
      alert('Please fill in all item details.');
      return;
    }
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
    if (!currentVendor.name || !currentVendor.email) {
      alert('Please provide vendor name and email.');
      return;
    }
    setRfqData((prevData) => ({
      ...prevData,
      vendors: [...prevData.vendors, currentVendor],
    }));
    setCurrentVendor({ name: '', email: '' });
  };

  const handleNext = () => {
    if (step === 1 && !rfqData.requisitionId) {
      alert('Please provide a requisition ID.');
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    if (!rfqData.items.length || !rfqData.vendors.length) {
      alert('Please add at least one vendor and one item.');
      return;
    }
    alert('RFQ Created Successfully!');
    console.log(rfqData);
    setRfqData({
      requisitionId: '',
      vendors: [],
      items: [],
      notes: '',
    });
    setStep(1);
  };

  return (
    <div id="multiStepForm">
      <h1>Request for Quotation (RFQ)</h1>

      {/* Step 1: RFQ Details */}
      {step === 1 && (
        <div className="formStep">
          <h2>Step 1: RFQ Details</h2>
          <label htmlFor="requisitionId">Requisition ID:</label>
          <input
            id="requisitionId"
            type="text"
            name="requisitionId"
            value={rfqData.requisitionId}
            onChange={handleChange}
          />

          <div className="navigationButtons">
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 2: Add Vendors */}
      {step === 2 && (
        <div className="formStep">
          <h2>Step 2: Add Vendors</h2>
          <label htmlFor="vendorName">Vendor Name:</label>
          <input
            id="vendorName"
            type="text"
            name="name"
            value={currentVendor.name}
            onChange={handleVendorChange}
          />
          <label htmlFor="vendorEmail">Vendor Email:</label>
          <input
            id="vendorEmail"
            type="email"
            name="email"
            value={currentVendor.email}
            onChange={handleVendorChange}
          />
          <button type="button" onClick={addVendor}>
            Add Vendor
          </button>

          <h3>Vendors List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {rfqData.vendors.map((vendor, index) => (
                <tr key={index}>
                  <td>{vendor.name}</td>
                  <td>{vendor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Add Items */}
      {step === 3 && (
        <div className="formStep">
          <h2>Step 3: Add Items</h2>
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

          <h3>Items List</h3>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {rfqData.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 4: Review and Submit */}
      {step === 4 && (
        <div className="formStep">
          <h2>Step 4: Review and Submit</h2>
          <h3>Requisition ID:</h3>
          <p>{rfqData.requisitionId}</p>
          <h3>Vendors:</h3>
          <ul>
            {rfqData.vendors.map((vendor, index) => (
              <li key={index}>
                {vendor.name} ({vendor.email})
              </li>
            ))}
          </ul>
          <h3>Items:</h3>
          <ul>
            {rfqData.items.map((item, index) => (
              <li key={index}>
                {item.description} - {item.quantity} {item.unit} ({item.priority})
              </li>
            ))}
          </ul>
          <h3>Additional Notes:</h3>
          <p>{rfqData.notes}</p>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button type="button" onClick={handleSubmit}>
              Submit RFQ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RFQ;
