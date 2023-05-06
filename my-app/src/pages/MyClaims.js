import React, { useState } from "react";
import ClaimsList from "../components/ClaimsList";

export default function MyClaims() {
  const [data, setData] = useState([1, 2]);
  return (
    <div>
      my claims
      <ClaimsList data={data} />
    </div>
  );
}
