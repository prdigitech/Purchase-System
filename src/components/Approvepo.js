import React, { useState } from 'react';
import '../styles/style.css'; // Reuse existing styles

const ApprovePO = () => {
  const [pendingPOs, setPendingPOs] = useState([
    {
      id: 1,
      rfqId: 'RFQ123',
      vendor: 'Vendor A',
      items: [
        { description: 'Item 1', quantity: 10, unit: 'kg', price: 50 },
        { description: 'Item 2', quantity: 5, unit: 'liters', price: 20 },
      ],
      terms: 'Payment within 30 days.',
      notes: 'Urgent delivery required.',
    },
    {
      id: 2,
      rfqId: 'RFQ124',
      vendor: 'Vendor B',
      items: [
        { description: 'Item 3', quantity: 20, unit: 'boxes', price: 100 },
      ],
      terms: 'Payment upon delivery.',
      notes: 'Handle with care.',
    },
  ]);

  const handleAction = (poId, action) => {
    const updatedPOs = pendingPOs.filter((po) => po.id !== poId);
    setPendingPOs(updatedPOs);

    alert(`PO ${poId} has been ${action}.`);
    console.log(`PO ${poId} ${action} successfully.`);
  };

  return (
    <div id="multiStepForm">
      <h1>Approve Purchase Orders</h1>
      {pendingPOs.length > 0 ? (
        pendingPOs.map((po) => (
          <div className="formStep" key={po.id}>
            <h2>PO ID: {po.id}</h2>
            <p><strong>RFQ ID:</strong> {po.rfqId}</p>
            <p><strong>Vendor:</strong> {po.vendor}</p>
            <h3>Items:</h3>
            <ul>
              {po.items.map((item, index) => (
                <li key={index}>
                  {item.description} - {item.quantity} {item.unit} @ {item.price} per unit
                </li>
              ))}
            </ul>
            <p><strong>Terms:</strong> {po.terms}</p>
            <p><strong>Notes:</strong> {po.notes}</p>
            <div className="navigationButtons">
              <button onClick={() => handleAction(po.id, 'approved')}>Approve</button>
              <button onClick={() => handleAction(po.id, 'rejected')}>Reject</button>
            </div>
          </div>
        ))
      ) : (
        <p>All POs have been processed.</p>
      )}
    </div>
  );
};

export default ApprovePO;
