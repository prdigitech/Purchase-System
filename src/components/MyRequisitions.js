import React, { useState, useEffect } from 'react';

const MyRequisitions = () => {
  const [requisitions, setRequisitions] = useState([]);

  useEffect(() => {
    // Fetch data for "My Requisitions" from the backend
    fetch('/api/requisitions/my')
      .then((response) => response.json())
      .then((data) => setRequisitions(data))
      .catch((error) => console.error('Error fetching requisitions:', error));
  }, []);

  return (
    <div className="my-requisitions">
      <h2>My Requisitions</h2>
      <table>
        <thead>
          <tr>
            <th>Requisition ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {requisitions.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.description}</td>
              <td>{req.status}</td>
              <td>{req.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRequisitions;
