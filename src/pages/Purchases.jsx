import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../utils/getConfig";
import PurchasesCard from "../components/Purchases/PurchasesCard";

const Purchases = () => {
  const [purchasesList, setPurchasesList] = useState();

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setPurchasesList(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  console.log(purchasesList);

  return (
    <section>
      <h2>My purchases</h2>
      <div className="puchases-container">
        {purchasesList?.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </section>
  );
};

export default Purchases;
