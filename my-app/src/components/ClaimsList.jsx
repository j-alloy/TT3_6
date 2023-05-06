import styles from "./ClaimsList.module.scss";

const ClaimsList = ({ data }) => {
  return (
    <div className={styles.claims__wrapper}>
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
