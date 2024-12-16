import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NewRequisition from './components/NewRequisition';
import MyRequisitions from './components/MyRequisitions'; // New Component
import AllRequisitions from './components/AllRequisitions'; // New Component
import RFQ from './components/RFQ';
import CreatePO from './components/Createpo';
import ApprovePO from './components/Approvepo';
import VendorDirectory from './components/VendorDirectory'; // New Component
import './styles/style.css';

const App = () => {
  const [activePage, setActivePage] = useState('dashboard'); // Default page is Dashboard

  const navigateTo = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar activePage={activePage} onNavigate={navigateTo} />
      <main id="mainContent">
        {/* Conditional Rendering of Components Based on Active Page */}
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'newRequisition' && <NewRequisition />}
        {activePage === 'myRequisitions' && <MyRequisitions />} {/* New Tab */}
        {activePage === 'allRequisitions' && <AllRequisitions />} {/* New Tab */}
        {activePage === 'RFQ' && <RFQ />}
        {activePage === 'createPO' && <CreatePO />}
        {activePage === 'approvePO' && <ApprovePO />}
        {activePage === 'vendorDirectory' && <VendorDirectory />} {/* New Tab */}
      </main>
    </div>
  );
};

export default App;
