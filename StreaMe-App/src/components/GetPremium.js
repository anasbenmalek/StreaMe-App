import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Start meeting without limits,  get <span className="text-gradient">Premium</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Want to start a meeting everywhere, anytime get Premium 
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CardDeal;
