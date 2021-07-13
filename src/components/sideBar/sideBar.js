import SearchBar from './searchBar';
import TagSection from './tagSection';
import styles from '../../styles/sideBar.module.css';

export default function SideBar() {
  return (
    <div className={styles.stickyContainer}>
      <div className={styles.container}>
        <SearchBar />
        <TagSection />
      </div>
    </div>
  );
}
