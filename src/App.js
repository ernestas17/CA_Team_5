import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import './App.css';
import Header from './components/organisms/Header/Header';
import SERVICES from './shared/constants/services';
import CallToAction from './components/atoms/CallToAction/CallToAction';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      {SERVICES.map((service) => (
        <CallToAction key={service.id} service={service} />
      ))}
    </BrowserRouter>
  );
};

export default App;
