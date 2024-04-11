import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Layout><Home /></Layout>} />
          <Route path="crm-contact-list" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;