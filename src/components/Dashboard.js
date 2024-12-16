import React from 'react';
import '../styles/style.css'; // Ensure correct path for styles

// Dashboard Component
const Dashboard = ({ userName }) => {

  // Function to handle card button clicks dynamically
  const handleClick = (section) => {
    alert(`You are now viewing: ${section}`);
  };

  return (
    <section id="dashboard" className="page">
      <h2 className='h2d'>Dashboard</h2>
      <h3 className='h3d'>Welcome, {userName}!</h3>
      <div className="card-container">
        {/* Purchase Requisition Card */}
        <div className="card">
          <h2>Purchase Requisition</h2>
          <p>Pending Requisitions</p>
          <p>Urgent Requisitions</p>
          <button
            id="cardb"
            className="cardb1"
            onClick={() => handleClick("Viewing all purchase requisitions")}
          >
            View All Requisitions
          </button>
        </div>

        {/* RFQ (Request For Quotation) Card */}
        <div className="card">
          <h2>Request For Quotation (RFQ)</h2>
          <p>Open RFQs</p>
          <p>Pending Responses</p>
          <button
            id="cardb"
            className="cardb2"
            onClick={() => handleClick("Managing RFQs")}
          >
            Manage RFQs
          </button>
        </div>

        {/* Purchase Orders Card */}
        <div className="card">
          <h2>Purchase Orders</h2>
          <p>Pending POs</p>
          <p>POs Awaiting Approvals</p>
          <button
            id="cardb"
            className="cardb3"
            onClick={() => handleClick("Viewing all purchase orders")}
          >
            View All POs
          </button>
        </div>

        {/* PO Approvals Card */}
        <div className="card">
          <h2>PO Approvals</h2>
          <p>POs Awaiting Approvals</p>
          <p>POs Approved/Rejected</p>
          <button
            id="cardb"
            className="cardb4"
            onClick={() => handleClick("Reviewing pending approvals")}
          >
            Review Pending Approvals
          </button>
        </div>

        {/* Inventory & Stock Management Card */}
        <div className="card">
          <h2>Inventory & Stock Management</h2>
          <p>Items in Stock</p>
          <p>Low Stock Items</p>
          <button
            id="cardb"
            className="cardb5"
            onClick={() => handleClick("Viewing stock levels")}
          >
            View Stock Levels
          </button>
        </div>

        {/* Inventory Movements Card */}
        <div className="card">
          <h2>Inventory Movements</h2>
          <p>Recent Transfers</p>
          <p>Counts for Goods</p>
          <button
            id="cardb"
            className="cardb6"
            onClick={() => handleClick("Viewing transfer details")}
          >
            View Transfer Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
