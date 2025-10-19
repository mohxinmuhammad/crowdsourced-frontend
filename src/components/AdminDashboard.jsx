import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  const stats = [
    { title: 'Total Words', value: '12,543', change: '+12%', trend: 'up' },
    { title: 'Total Responses', value: '843', change: '+12%', trend: 'up' },
    // { title: 'Active Projects', value: '89', change: '+5%', trend: 'up' },
    // { title: 'Revenue', value: '$45,230', change: '+18%', trend: 'up' },
    // { title: 'Support Tickets', value: '23', change: '-8%', trend: 'down' }
  ];

  // const recentActivities = [
  //   { id: 1, user: 'John Doe', action: 'Created new project', time: '2 minutes ago', type: 'project' },
  //   { id: 2, user: 'Sarah Wilson', action: 'Updated profile', time: '5 minutes ago', type: 'profile' },
  //   { id: 3, user: 'Mike Johnson', action: 'Submitted feedback', time: '10 minutes ago', type: 'feedback' },
  //   { id: 4, user: 'Emily Davis', action: 'Joined community', time: '15 minutes ago', type: 'user' },
  //   { id: 5, user: 'Alex Brown', action: 'Completed task', time: '20 minutes ago', type: 'task' }
  // ];

  const renderOverview = () => (
    <div className="dashboard-content">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <h3>{stat.title}</h3>
              <div className={`stat-change ${stat.trend}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {stat.trend === 'up' ? (
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                  ) : (
                    <polyline points="23,18 13.5,8.5 8.5,13.5 1,6"/>
                  )}
                </svg>
                {stat.change}
              </div>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Activity</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {activity.type === 'project' && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>}
                    {activity.type === 'profile' && <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>}
                    {activity.type === 'feedback' && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>}
                    {activity.type === 'user' && <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>}
                    {activity.type === 'task' && <path d="M9 11l3 3 8-8"/>}
                  </svg>
                </div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>{activity.user}</strong> {activity.action}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              Add User
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Create Project
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <line x1="8" y1="9" x2="16" y2="9"/>
                <line x1="8" y1="13" x2="16" y2="13"/>
              </svg>
              Send Message
            </button>
            <button className="action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
                <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6"/>
              </svg>
              Analytics
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );

  const renderWords = () => (
    <div className="dashboard-content">
      <div className="content-header">
        <h2>Daily Words Management</h2>
        <button className="btn btn-primary">Add New Word</button>
      </div>
      <div className="dashboard-card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Word/Phrase</th>
                <th>Date</th>
                <th>Status</th>
                <th>Submissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zephyrian</strong></td>
                <td>Today</td>
                <td><span className="status-badge active">Active</span></td>
                <td>47</td>
                <td>
                  <button className="action-icon">Edit</button>
                  <button className="action-icon">View Submissions</button>
                </td>
              </tr>
              <tr>
                <td><strong>Luminescent</strong></td>
                <td>Yesterday</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td>89</td>
                <td>
                  <button className="action-icon">Edit</button>
                  <button className="action-icon">View Submissions</button>
                </td>
              </tr>
              <tr>
                <td><strong>Serendipity</strong></td>
                <td>2 days ago</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td>156</td>
                <td>
                  <button className="action-icon">Edit</button>
                  <button className="action-icon">View Submissions</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="dashboard-content">
      <div className="content-header">
        <h2>Settings</h2>
      </div>
      <div className="settings-grid">
        <div className="dashboard-card">
          <h3>General Settings</h3>
          <div className="setting-item">
            <label>Site Name</label>
            <input type="text" defaultValue="CrowdSourced" />
          </div>
          <div className="setting-item">
            <label>Site Description</label>
            <textarea defaultValue="A powerful platform that connects communities and enables collaborative solutions."></textarea>
          </div>
          <div className="setting-item">
            <label>Maintenance Mode</label>
            <label className="toggle">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="dashboard-card">
          <h3>Security Settings</h3>
          <div className="setting-item">
            <label>Two-Factor Authentication</label>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <label>Session Timeout (minutes)</label>
            <input type="number" defaultValue="30" />
          </div>
          <div className="setting-item">
            <label>Password Requirements</label>
            <select>
              <option>Strong</option>
              <option>Medium</option>
              <option>Weak</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>CrowdSourced</h2>
          <span className="admin-badge">Admin</span>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'words' ? 'active' : ''}`}
            onClick={() => setActiveTab('words')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Daily Words
          </button>
          {/* <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </button> */}
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              Notifications
            </button>
            <div className="user-menu">
              <div className="user-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span>Admin User</span>
            </div>
          </div>
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'words' && renderWords()}
        {/* {activeTab === 'settings' && renderSettings()} */}
      </div>
    </div>
  );
};

export default AdminDashboard;
