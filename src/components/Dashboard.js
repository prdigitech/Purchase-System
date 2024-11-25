import React from 'react';
import '../styles/style.css'; // Adjust path based on where you save it

// Dashboard Component
const Dashboard = () => (
  <section id="dashboard" className="page">
    <h2>Dashboard</h2>
    <h3>Welcome, Mr.Palwankar!</h3>
    <div className="card-container">
      <div className="card">
        <h2>Purchase Requisition</h2>
        <p>Pending Requisitions</p>
        <p>Urgent Requisitions</p>
        <button id="cardb" className="cardb1">View All Requisitions</button>
      </div>
      <div className="card">
        <h2>Request For Quotation (RFQ)</h2>
        <p>Open RFQs</p>
        <p>Pending Responses</p>
        <button id="cardb" className="cardb2">Manage RFQs</button>
      </div>
      <div className="card">
        <h2>Purchase Orders</h2>
        <p>Pending POs</p>
        <p>POs Awaiting Approvals</p>
        <button id="cardb" className="cardb3">View All POs</button>
      </div>
      <div className="card">
        <h2>PO Approvals</h2>
        <p>POs Awaiting Approvals</p>
        <p>POs Approved/Rejected</p>
        <button id="cardb" className="cardb4">Review Pending Approvals</button>
      </div>
      <div className="card">
        <h2>Inventory & Stock Management</h2>
        <p>Items in Stock</p>
        <p>Low Stock Items</p>
        <button id="cardb" className="cardb5">View Stock Levels</button>
      </div>
      <div className="card">
        <h2>Inventory Movements</h2>
        <p>Recent Transfers</p>
        <p>Counts for Goods</p>
        <button id="cardb" className="cardb6">View Transfer Details</button>
      </div>
    </div>
  </section>
);

export default Dashboard;
