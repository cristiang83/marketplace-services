import React from "react";
import { ServiceCard } from "./ServiceCard";
import { ProviderCard } from "./ProviderCard";

export function Providers() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProviderCard
            name="Perico"
            description="Trabajo por cuenta propia hace varios meses"
            id="00992"
            image_url=""
          />
        </div>
      </div>
    </div>
  );
}
