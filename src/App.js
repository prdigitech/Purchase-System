import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NewRequisition from './components/NewRequisition';
import RFQ from './components/RFQ'; // Ensure RFQ is a default export now
import CreatePO from './components/Createpo'; 
import ApprovePO from './components/Approvepo';
import './styles/style.css'; // Adjust path based on your directory structure

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const navigateTo = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar activePage={activePage} onNavigate={navigateTo} />
      <main id="mainContent">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'newRequisition' && <NewRequisition />}
        {activePage === 'RFQ' && <RFQ />} {/* RFQ component */}
        {activePage === 'createPO' && <CreatePO />} {/* Add CreatePO route */}
        {activePage === 'approvePO' && <ApprovePO />} {/* Add Approve PO route */}


      </main>
    </div>
  );
};

export default App;
