import { useContext } from 'react';
import { SearchContext } from '../store/search-context';
import { FilterContext } from '../store/filter-context';
import styles from '../styles/mainContent.module.css';

export default function MainContent({ articles }) {
  const searchContext = useContext(SearchContext);
  const { tags } = useContext(FilterContext);
  let filteredArticles = null;
  if (articles) {
    // Tag Search
    filteredArticles = articles.filter(article => {
      if (tags.length === 0) {
        return article;
      }
      if (tags.some(val => article.tags.includes(val))) {
        return article;
      } else {
        return null;
      }
    });

    // Text Search
    filteredArticles = filteredArticles.filter(article => {
      if (article.title.toLowerCase().includes(searchContext.query)) {
        return article;
      } else {
        return null;
      }
    });
  }

  return (
    <div className={styles.container}>
      {filteredArticles !== null &&
        filteredArticles.map(article => {
          return (
            <div className={styles.thumbnailContainer} key={article.id}>
              <h2>{article.title}</h2>
            </div>
          );
        })}
    </div>
  );
}
