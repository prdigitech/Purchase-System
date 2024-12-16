import React, { useState } from 'react';
import '../styles/style.css';

const NewRequisition = () => {
  const [step, setStep] = useState(1);
  const [requisitionData, setRequisitionData] = useState({
    title: '',
    department: '',
    siteName: '', // New field
    city: '', // New field
    requisitionDate: '',
    requiredByDate: '',
    urgencyLevel: 'Low',
    items: [],
    remarks: '',
    employeeName: '', // New field
    signature: null, // New field
  });
  const [currentItem, setCurrentItem] = useState({
    description: '',
    quantity: '',
    unit: '',
    priority: 'Low',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequisitionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setRequisitionData((prevData) => ({
      ...prevData,
      signature: e.target.files[0],
    }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddItem = () => {
    setRequisitionData((prevData) => ({
      ...prevData,
      items: [...prevData.items, currentItem],
    }));
    setCurrentItem({
      description: '',
      quantity: '',
      unit: '',
      priority: 'Low',
      notes: '',
    });
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    alert('Requisition Submitted Successfully!');
    console.log(requisitionData); // Simulate submission
    setStep(1);
    setRequisitionData({
      title: '',
      department: '',
      siteName: '',
      city: '',
      requisitionDate: '',
      requiredByDate: '',
      urgencyLevel: 'Low',
      items: [],
      remarks: '',
      employeeName: '',
      signature: null,
    });
  };

  return (
    <div id="multiStepForm">
      <h1>New Requisition</h1>

      {/* Step 1: Requisition Details */}
      {step === 1 && (
        <div className="formStep">
          <h2>Step 1: Requisition Details</h2>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={requisitionData.title}
            onChange={handleChange}
          />
          <label htmlFor="department">Department:</label>
          <input
            id="department"
            type="text"
            name="department"
            value={requisitionData.department}
            onChange={handleChange}
          />
          <label htmlFor="siteName">Site/Project Name:</label> {/* New Field */}
          <input
            id="siteName"
            type="text"
            name="siteName"
            value={requisitionData.siteName}
            onChange={handleChange}
          />
          <label htmlFor="city">City:</label> {/* New Field */}
          <input
            id="city"
            type="text"
            name="city"
            value={requisitionData.city}
            onChange={handleChange}
          />
          <label htmlFor="requisitionDate">Requisition Date:</label>
          <input
            id="requisitionDate"
            type="date"
            name="requisitionDate"
            value={requisitionData.requisitionDate}
            onChange={handleChange}
          />
          <label htmlFor="requiredByDate">Required By Date:</label>
          <input
            id="requiredByDate"
            type="date"
            name="requiredByDate"
            value={requisitionData.requiredByDate}
            onChange={handleChange}
          />
          <label htmlFor="urgencyLevel">Urgency Level:</label>
          <select
            id="urgencyLevel"
            name="urgencyLevel"
            value={requisitionData.urgencyLevel}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
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
          <label htmlFor="unit">Unit of Measure:</label>
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
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={currentItem.notes}
            onChange={handleItemChange}
          ></textarea>
          <button type="button" onClick={handleAddItem}>
            Add Item
          </button>

          <h3>Items List</h3>
          <ul>
            {requisitionData.items.map((item, index) => (
              <li key={index}>
                {item.description} - {item.quantity} {item.unit} ({item.priority})
              </li>
            ))}
          </ul>

          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Submission and Review */}
      {step === 3 && (
        <div className="formStep">
          <h2>Step 3: Submission and Review</h2>
          <label htmlFor="employeeName">Employee Name:</label> {/* New Field */}
          <input
            id="employeeName"
            type="text"
            name="employeeName"
            value={requisitionData.employeeName}
            onChange={handleChange}
          />
          <label htmlFor="signature">Upload Digital Signature:</label> {/* New Field */}
          <input type="file" id="signature" name="signature" onChange={handleFileChange} />
          <h3>Review Your Requisition</h3>
          <pre>{JSON.stringify(requisitionData, null, 2)}</pre>
          <div className="navigationButtons">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRequisition;
