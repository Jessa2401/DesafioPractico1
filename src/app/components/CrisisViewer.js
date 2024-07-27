"use client";

import React from 'react';
import CrisisNode from './CrisisNode';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CrisisViewer({ data }) {
  return (
    <div>
      {data.map((crisis, index) => (
        <CrisisNode key={index} crisis={crisis} />
      ))}
    </div>
  );
}

export default CrisisViewer;