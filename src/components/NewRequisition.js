import React, { useState } from 'react';
import '../styles/style.css'; // Ensure this path is correct.

const NewRequisition = () => {
  const [requisitions, setRequisitions] = useState([]);
  const [items, setItems] = useState([]);

  const handleFormSubmit = (newRequisition) => {
    setRequisitions([...requisitions, newRequisition]);
  };

  const handleItemSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div id="newRequisitionPage">
      <h1>New Requisition</h1>
      <RequisitionForm onSubmit={handleFormSubmit} />
      <ItemForm onSubmit={handleItemSubmit} />
      {requisitions.length > 0 && (
        <div id="requisitionDisplay">
          <h2>Submitted Requisitions</h2>
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
      )}
      {items.length > 0 && (
        <div id="itemDisplay">
          <h2>Submitted Items</h2>
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
    urgencyLevel: 'Low', // Default option
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
      urgencyLevel: 'Low', // Reset to default
    });
  };

  return (
    <form id="dynamicForm" onSubmit={handleSubmit}>
      <h2>Create New Requisition:</h2>
      <label htmlFor="title">Requisition Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="department">Department:</label>
      <input
        type="text"
        id="department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <label htmlFor="requisitionDate">Requisition Date:</label>
      <input
        type="date"
        id="requisitionDate"
        name="requisitionDate"
        value={formData.requisitionDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="requiredByDate">Required By Date:</label>
      <input
        type="date"
        id="requiredByDate"
        name="requiredByDate"
        value={formData.requiredByDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="urgencyLevel">Urgency Level:</label>
      <select
        id="urgencyLevel"
        name="urgencyLevel"
        value={formData.urgencyLevel}
        onChange={handleChange}
        required
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
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
      <label htmlFor="description">Item Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={itemData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={itemData.quantity}
        onChange={handleChange}
        required
      />
      <label htmlFor="unit">Unit of Measure:</label>
      <input
        type="text"
        id="unit"
        name="unit"
        value={itemData.unit}
        onChange={handleChange}
        required
      />
      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        name="priority"
        value={itemData.priority}
        onChange={handleChange}
        required
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <textarea
        id="notes"
        name="notes"
        value={itemData.notes}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRequisition;
