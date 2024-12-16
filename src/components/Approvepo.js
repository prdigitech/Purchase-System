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

  const [searchTerm, setSearchTerm] = useState('');
  const [processedPOs, setProcessedPOs] = useState([]);

  const calculateTotalCost = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const handleAction = (poId, action) => {
    const selectedPO = pendingPOs.find((po) => po.id === poId);
    const updatedPOs = pendingPOs.filter((po) => po.id !== poId);

    setPendingPOs(updatedPOs);
    setProcessedPOs((prevProcessed) => [
      ...prevProcessed,
      { ...selectedPO, actionTaken: action },
    ]);

    alert(`PO ${poId} has been ${action}.`);
    console.log(`PO ${poId} ${action} successfully.`);
  };

  const filteredPOs = pendingPOs.filter(
    (po) =>
      po.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      po.rfqId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="multiStepForm">
      <h1>Approve Purchase Orders</h1>

      {/* Search and Filter */}
      <div className="searchFilter">
        <label htmlFor="search">Search POs:</label>
        <input
          id="search"
          type="text"
          placeholder="Search by Vendor or RFQ ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pending POs */}
      {filteredPOs.length > 0 ? (
        filteredPOs.map((po) => (
          <div className="formStep poCard" key={po.id}>
            <h2>PO ID: {po.id}</h2>
            <p><strong>RFQ ID:</strong> {po.rfqId}</p>
            <p><strong>Vendor:</strong> {po.vendor}</p>
            <h3>Items:</h3>
            <ul>
              {po.items.map((item, index) => (
                <li key={index}>
                  {item.description} - {item.quantity} {item.unit} @ ${item.price} per unit
                </li>
              ))}
            </ul>
            <h4>Total Cost: ${calculateTotalCost(po.items)}</h4>
            <p><strong>Terms:</strong> {po.terms}</p>
            <p><strong>Notes:</strong> {po.notes}</p>
            <div className="navigationButtons">
              <button
                onClick={() =>
                  window.confirm(`Are you sure you want to approve PO ${po.id}?`) &&
                  handleAction(po.id, 'approved')
                }
              >
                Approve
              </button>
              <button
                onClick={() =>
                  window.confirm(`Are you sure you want to reject PO ${po.id}?`) &&
                  handleAction(po.id, 'rejected')
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No POs match your search or all POs have been processed.</p>
      )}

      {/* Processed POs */}
      {processedPOs.length > 0 && (
        <div className="processedSection">
          <h2>Processed POs</h2>
          <ul>
            {processedPOs.map((po, index) => (
              <li key={index}>
                PO {po.id} ({po.vendor}) - {po.actionTaken.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ApprovePO;
