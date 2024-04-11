import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AllRouter from "./allRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Layout><Home /></Layout>} />
          {
            AllRouter.map((route, index) => {
              let { subItems } = route;
              return subItems.map((subItem, subIndex) => {
                return (
                  <Route key={index+"-"+subIndex} path={subItem.path} element={<Layout><subItem.element /></Layout>} />
                )
              })
            })
          }
         
      </Routes>
    </Router>
  );
};

export default AppRouter;