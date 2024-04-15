import React from "react";
import { ServiceCard } from "./ServiceCard";

export function ServicesList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ServiceCard
            name="Electricistas"
            description="Provide electric repairs"
            id="00992"
          />
        </div>
      </div>
    </div>
    
  );
}
