import React, { useState, useEffect } from 'react';

const AllRequisitions = () => {
  const [requisitions, setRequisitions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data for "All Requisitions" from the backend
    fetch('/api/requisitions/all')
      .then((response) => response.json())
      .then((data) => setRequisitions(data))
      .catch((error) => console.error('Error fetching requisitions:', error));
  }, []);

  const filteredRequisitions = requisitions.filter((req) =>
    req.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-requisitions">
      <h2>All Requisitions</h2>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Requisition ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequisitions.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.description}</td>
              <td>{req.status}</td>
              <td>{req.createdBy}</td>
              <td>{req.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRequisitions;
