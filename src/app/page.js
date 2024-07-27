"use client"; 

import React, { useState, useEffect } from 'react';
import CrisisViewer from './components/CrisisViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/empresas-valiosas.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Crisis Económicas Recientes</h1>
      {data ? <CrisisViewer data={data.crisis_economicas} /> : <p>Cargando...</p>}
    </div>
  );
}