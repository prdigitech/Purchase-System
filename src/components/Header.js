import React from 'react';
import '../styles/style.css'; // Adjust path based on where you save it

const Header = () => {
  return (
    <header id="header">
      <div id="logoContainer" onClick={() => alert('Navigating to home...')}>
        <img id="logo" src="/images/Shubhshree_logo.png" alt="Shubhshree Logo" />
      </div>
      <div id="headerTitle">
        <h1>Procurement System</h1>
      </div>
      <div id="headerActions">
        <button
          onClick={() => alert('Notification functionality coming soon!')}
          aria-label="Notifications"
        >
          <img src="/images/notification_icon.png" alt="Notifications" />
        </button>
        <button
          onClick={() => alert('Profile menu functionality coming soon!')}
          aria-label="Profile"
        >
          <img src="/images/profile.png" alt="Profile" />
        </button>
      </div>
    </header>
  );
};

export default Header;
