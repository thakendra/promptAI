import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./subscribe-form.module.css";

const SubscribeForm = () => {
  const router = useRouter();

  const onButton3Click = useCallback(() => {
    router.push("/page2");
  }, [router]);

  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribeform}>
        <div className={styles.title}>Get the Newsletter</div>
        <form
          className={styles.form}
          action="https://www.locofy.ai"
          method="post"
          id="formID"
        >
          <input className={styles.input} type="text" placeholder="Email" />
          <button
            className={styles.button}
            type="submit"
            form="formID"
            onClick={onButton3Click}
          >
            <div className={styles.subscribe1}>Subscribe</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
