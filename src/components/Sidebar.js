import React, { useState, useEffect } from 'react';
import '../styles/style.css'; // Adjust path based on where you save it

const Sidebar = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setMenuOpen] = useState(true); // Sidebar open by default
  const [isSmallScreen, setSmallScreen] = useState(false); // Tracks screen size

  useEffect(() => {
    // Update the screen size state based on window width
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768); // Small screen if width <= 768px
    };

    handleResize(); // Check the size initially
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Burger Menu Button - Visible only on small screens */}
      {isSmallScreen && (
        <button
          id="burgerMenu"
          aria-label="Toggle Sidebar"
          onClick={toggleMenu}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        aria-label="Sidebar Navigation"
        className={`${isMenuOpen || !isSmallScreen ? 'open' : 'closed'}`}
      >
        <div id="sidebarb">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'newRequisition', label: 'New Requisition' },
            { id: 'myRequisitions', label: 'My Requisitions' }, // New Tab
            { id: 'allRequisitions', label: 'All Requisitions' }, // New Tab
            { id: 'RFQ', label: 'Request For Quotation (RFQ)' },
            { id: 'createPO', label: 'Create PO' },
            { id: 'approvePO', label: 'Approve PO' },
            { id: 'vendorDirectory', label: 'Vendor Directory' }, // New Feature
          ].map((page) => (
            <button
              key={page.id}
              className={activePage === page.id ? 'active' : ''}
              onClick={() => {
                onNavigate(page.id);
                if (isSmallScreen) setMenuOpen(false); // Close menu on small screens
              }}
              aria-current={activePage === page.id ? 'page' : undefined}
            >
              {page.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
