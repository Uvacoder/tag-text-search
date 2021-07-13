import { useState, useContext } from 'react';
import { TAGS } from '../../data/data';
import { FilterContext } from '../../store/filter-context';
import styles from '../../styles/sideBar.module.css';

export default function TagSection() {
  const filterContext = useContext(FilterContext);

  const [unselectedTags, setUnselectedTags] = useState(TAGS);
  const [selectedTags, setSelectedTags] = useState([]);

  const selectTagHandler = tag => {
    const updatedSelectedTags = selectedTags.concat(tag);
    setSelectedTags(updatedSelectedTags);
    setUnselectedTags(
      unselectedTags.filter(unselectedTag => unselectedTag !== tag)
    );
    filterContext.tagSelector(updatedSelectedTags);
  };

  const unselectTagHandler = tag => {
    setUnselectedTags(unselectedTags.concat(tag));
    const updatedSelectedTags = selectedTags.filter(
      selectedTag => selectedTag !== tag
    );
    setSelectedTags(updatedSelectedTags);
    filterContext.tagSelector(updatedSelectedTags);
  };

  const selectedTagsList = selectedTags.map(tag => (
    <button
      className={styles.ts__selectedTag}
      key={tag}
      onClick={() => unselectTagHandler(tag)}
    >
      #{tag}
    </button>
  ));

  const unselectedTagsList = unselectedTags.map(tag => (
    <button
      key={tag}
      className={styles.ts__unselectedTag}
      onClick={() => selectTagHandler(tag)}
    >
      #{tag}
    </button>
  ));

  return (
    <div className={styles.ts__flexContainer}>
      <div className={styles.ts__flexContainer}>
        <h2 className={styles.ts__heading}>You Selected</h2>
        <div className={styles.ts_selectedTagContainer}>{selectedTagsList}</div>
      </div>
      <div className={styles.ts__flexContainer}>
        <h2 className={styles.ts__heading}>To Select From</h2>
        <div className={styles.ts__unselectedTagContainer}>
          {unselectedTagsList}
        </div>
      </div>
    </div>
  );
}
