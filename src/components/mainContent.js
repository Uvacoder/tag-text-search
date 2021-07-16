import styles from '../styles/mainContent.module.css';

export default function MainContent({ articles }) {
  const filteredArticles = articles;
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
