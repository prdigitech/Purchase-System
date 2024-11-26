import React, { useState } from 'react';
import '../styles/style.css';

const NewRequisition = () => {
  const [requisitions, setRequisitions] = useState([]);
  const [items, setItems] = useState([]);
  const [remarks, setRemarks] = useState('');
  const [showForm, setShowForm] = useState(null);

  const handleFormSubmit = (newRequisition) => {
    setRequisitions([...requisitions, newRequisition]);
    setShowForm(null); // Close form after submission
  };

  const handleItemSubmit = (newItem) => {
    setItems([...items, newItem]);
    setShowForm(null); // Close form after submission
  };

  const handleFinalSubmit = () => {
    alert('New Requisition has been submitted.');
    setShowForm(null); // Close form after submission
  };

  return (
    <div id="newRequisitionPage">
      <h1>New Requisition</h1>
      <div className="buttonGroup">
        <button onClick={() => setShowForm('newRequisition')}>New Requisition</button>
        <button onClick={() => setShowForm('addItem')}>Add Item</button>
        <button onClick={() => setShowForm('submissionReview')}>Submission & Review</button>
      </div>

      {showForm === 'newRequisition' && (
        <RequisitionForm onSubmit={handleFormSubmit} />
      )}

      {showForm === 'addItem' && <ItemForm onSubmit={handleItemSubmit} />}

      {showForm === 'submissionReview' && (
        <div id="submissionReviewForm">
          <h2>Submission and Review:</h2>
          <form id="remarksForm">
            <label htmlFor="remarks">Remarks:</label>
            <textarea
              id="remarks"
              name="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            ></textarea>
            <div className="fileAttachment">
              <label htmlFor="file">Attach Files:</label>
              <input type="file" id="file" name="file" />
            </div>
            <div className="actionButtons">
              <button type="button" onClick={handleFinalSubmit}>
                Submit Requisition
              </button>
              <button type="button" onClick={() => alert('Draft Saved!')}>
                Save Draft
              </button>
              <button type="button" onClick={() => setShowForm(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {(requisitions.length > 0 || items.length > 0) && (
        <div id="reviewSection">
          <h2>Review Submitted Data</h2>
          <div id="requisitionDisplay">
            <h3>Submitted Requisitions</h3>
            <table id="requisitionTable" border="1">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Requisition Date</th>
                  <th>Required By Date</th>
                  <th>Urgency Level</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((req, index) => (
                  <tr key={index}>
                    <td>{req.title}</td>
                    <td>{req.department}</td>
                    <td>{req.requisitionDate}</td>
                    <td>{req.requiredByDate}</td>
                    <td>{req.urgencyLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="itemDisplay">
            <h3>Submitted Items</h3>
            <table id="itemTable" border="1">
              <thead>
                <tr>
                  <th>Item Description</th>
                  <th>Quantity</th>
                  <th>Unit of Measure</th>
                  <th>Priority</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit}</td>
                    <td>{item.priority}</td>
                    <td>{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const RequisitionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    requisitionDate: '',
    requiredByDate: '',
    urgencyLevel: 'Low',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      department: '',
      requisitionDate: '',
      requiredByDate: '',
      urgencyLevel: 'Low',
    });
  };

  return (
    <form id="dynamicForm" onSubmit={handleSubmit}>
      <h2>Create New Requisition:</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Department:</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <label>Requisition Date:</label>
      <input
        type="date"
        name="requisitionDate"
        value={formData.requisitionDate}
        onChange={handleChange}
      />
      <label>Required By Date:</label>
      <input
        type="date"
        name="requiredByDate"
        value={formData.requiredByDate}
        onChange={handleChange}
      />
      <label>Urgency Level:</label>
      <select
        name="urgencyLevel"
        value={formData.urgencyLevel}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

const ItemForm = ({ onSubmit }) => {
  const [itemData, setItemData] = useState({
    description: '',
    quantity: '',
    unit: '',
    priority: 'Low',
    notes: '',
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemData);
    setItemData({
      description: '',
      quantity: '',
      unit: '',
      priority: 'Low',
      notes: '',
    });
  };

  return (
    <form id="itemForm" onSubmit={handleSubmit}>
      <h2>Add Items:</h2>
      <label>Item Description:</label>
      <input
        type="text"
        name="description"
        value={itemData.description}
        onChange={handleChange}
      />
      <label>Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={itemData.quantity}
        onChange={handleChange}
      />
      <label>Unit of Measure:</label>
      <input
        type="text"
        name="unit"
        value={itemData.unit}
        onChange={handleChange}
      />
      <label>Priority:</label>
      <select
        name="priority"
        value={itemData.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label>Notes:</label>
      <textarea
        name="notes"
        value={itemData.notes}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRequisition;
