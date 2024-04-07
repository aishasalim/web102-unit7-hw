import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import CreateView from './routes/CreateView.jsx';
import GalleryView from './routes/GalleryView.jsx';
import EditView from './routes/EditView.jsx';
import CrewInfoView from './routes/CrewInfoView.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route path="create" element={<CreateView />} />
      <Route path="gallery" element={<GalleryView />} />
      <Route path="/edit/:id" element={<EditView />} />
      <Route path="/:id" element={<CrewInfoView />} />
    </Route>
  </Routes>
</BrowserRouter>

)
