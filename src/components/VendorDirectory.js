import React, { useState, useEffect } from 'react';

const VendorDirectory = () => {
  const [vendors, setVendors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // Fetch vendor data from the backend
    fetch('/api/vendors')
      .then((response) => response.json())
      .then((data) => setVendors(data))
      .catch((error) => console.error('Error fetching vendors:', error));
  }, []);

  // Pagination logic
  const indexOfLastVendor = currentPage * itemsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - itemsPerPage;
  const currentVendors = vendors.slice(indexOfFirstVendor, indexOfLastVendor);

  const nextPage = () => {
    if (currentPage < Math.ceil(vendors.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="vendor-directory">
      <h2>Vendor Directory</h2>
      <table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentVendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.contact}</td>
              <td>{vendor.email}</td>
              <td>{vendor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(vendors.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VendorDirectory;
