import React, { useState } from "react";
import ClaimsList from "../components/ClaimsList";

export default function MyClaims() {
  const [data, setData] = useState([
    {
      date: "22/1",
      claimId: 1245,
      purpose: 4321,
      amount: 130.5,
      currency: "SGD",
      status: "pending",
    },
    {
      date: "22/1",
      claimId: 1245,
      purpose: 4321,
      amount: 130.5,
      currency: "SGD",
      status: "pending",
    },
  ]);
  return (
    <div>
      my claims
      <ClaimsList data={data} />
    </div>
  );
}
