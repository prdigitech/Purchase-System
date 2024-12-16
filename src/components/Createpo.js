import React, { useState } from 'react';
import '../styles/style.css'; // Reusing styles from RFQ page

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

  const [step, setStep] = useState(1);

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
    if (!currentItem.description || !currentItem.quantity || !currentItem.unit || !currentItem.price) {
      alert('Please fill in all item details.');
      return;
    }

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

  const calculateTotalCost = () => {
    return poData.items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const handleNext = () => {
    if (step === 1 && (!poData.rfqId || !poData.vendor)) {
      alert('Please provide RFQ ID and Vendor details.');
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    if (!poData.items.length) {
      alert('Please add at least one item.');
      return;
    }
    alert('Purchase Order Created Successfully!');
    console.log(poData);
    setPoData({
      rfqId: '',
      vendor: '',
      items: [],
      terms: '',
      notes: '',
    });
    setStep(1);
  };

  return (
    <div id="multiStepForm">
      <h1>Create Purchase Order (PO)</h1>

      {/* Step 1: PO Details */}
      {step === 1 && (
        <div className="formStep">
          <h2>Step 1: PO Details</h2>
          <label htmlFor="rfqId">RFQ ID:</label>
          <input
            id="rfqId"
            type="text"
            name="rfqId"
            value={poData.rfqId}
            onChange={handleChange}
          />

          <label htmlFor="vendor">Vendor:</label>
          <input
            id="vendor"
            type="text"
            name="vendor"
            value={poData.vendor}
            onChange={handleChange}
          />

          <div className="navigationButtons">
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 2: Add Items */}
      {step === 2 && (
        <div className="formStep">
          <h2>Step 2: Add Items</h2>

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
          <label htmlFor="price">Price per Unit:</label>
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

          <h3>Items List</h3>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {poData.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Cost: ${calculateTotalCost()}</h3>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Review and Submit */}
      {step === 3 && (
        <div className="formStep">
          <h2>Step 3: Review and Submit</h2>
          <h3>RFQ ID:</h3>
          <p>{poData.rfqId}</p>
          <h3>Vendor:</h3>
          <p>{poData.vendor}</p>
          <h3>Items:</h3>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {poData.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Cost: ${calculateTotalCost()}</h3>
          <h3>Terms and Conditions:</h3>
          <p>{poData.terms}</p>
          <h3>Additional Notes:</h3>
          <p>{poData.notes}</p>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button type="button" onClick={handleSubmit}>
              Submit PO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePO;
