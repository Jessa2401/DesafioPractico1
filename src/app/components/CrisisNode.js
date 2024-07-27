import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CrisisNode({ crisis }) {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-5">{crisis.titulo}</h2>
          <div className="row d-flex align-items-center mb-4">
            <div className="col-md-6">
              <p className="card-text">{crisis.descripcion}</p>
            </div>
            <div className="col-md-6">
              {crisis.imagen_de_referencia && (
                <img src={crisis.imagen_de_referencia} className="img-fluid card-img" />
              )}
            </div>
          </div>
          <div className="mt-5">
            <p className="card-text"><strong>Fecha:</strong> {crisis.caracteristicas.fecha}</p>
            <p className="card-text"><strong>Impacto:</strong> {crisis.caracteristicas.impacto}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrisisNode;