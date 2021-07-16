import { TAGS } from '../../data/data';
import styles from '../../styles/sideBar.module.css';

export default function TagSection() {
  return (
    <div className={styles.ts__flexContainer}>
      <div className={styles.ts__flexContainer}>
        <h2 className={styles.ts__heading}>You Selected</h2>
        <div className={styles.ts_selectedTagContainer}>
          {/* Put selected Tags */}
        </div>
      </div>
      <div className={styles.ts__flexContainer}>
        <h2 className={styles.ts__heading}>To Select From</h2>
        <div className={styles.ts__unselectedTagContainer}>
          {/* Put unselected Tags */}
        </div>
      </div>
    </div>
  );
}
