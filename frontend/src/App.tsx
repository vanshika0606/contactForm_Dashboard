import React from 'react';
import './App.css';
import Home from './components/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import ChartPage from './components/ChartPage';
import NoContactsPage from './components/NoContactsPage';
import CreateContactForm from './components/CreateContactForm';
import UpdateContactForm from './components/UpdateContactForm';
import Detail from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<ContactPage />} >
          <Route index path='' element={<NoContactsPage />} />
          <Route path="addContact" element={<CreateContactForm />} />
          <Route path="updateContact" element={<UpdateContactForm />} />
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="charts" element={<ChartPage />} />
      </Route>
    </Routes>

  );
}

export default App;
