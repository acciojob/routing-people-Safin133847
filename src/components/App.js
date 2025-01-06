import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
