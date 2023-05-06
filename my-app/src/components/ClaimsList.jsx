import { useState } from "react";
import styles from "./ClaimsList.module.scss";
import Modalform from "./Modalform";

const ClaimsList = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(false);

  const handleClick = (item) => {
    setModalData(item);
    setOpen(true);
  };
  return (
    <div className={styles.claims__wrapper}>
      <Modalform open={open} setOpen={setOpen} modalData={modalData} />
      <div
        className={`${styles.claims__item} ${styles["claims__item--title"]}`}
      >
        <div>DATE </div>
        <div>CLAIM ID</div>
        <div>PURPOSE</div>
        <div>AMOUNT</div>
        <div>CURRENCY</div>
        <div>STATUS</div>
      </div>
      <div className={styles.claims__list}>
        {data.map((item, index) => (
          <div
            className={`${styles.claims__item} ${
              styles[`claims__item--${(index + 1) % 2 == 0 ? "even" : "odd"}`]
            }`}
            onClick={() => handleClick(item)}
          >
            <div>{item.date}</div>
            <div>{item.claimId}</div>
            <div>{item.purpose}</div>
            <div>{item.amount}</div>
            <div>{item.currency}</div>
            <div>{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimsList;
