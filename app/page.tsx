import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FaceItAIAnalyzer</h1>
      <p className={styles.description}>
        Анализ статистики матчей CS2 с FACEIT с помощью ИИ-агента. Здесь скоро
        появится поиск игрока и разбор его матчей.
      </p>
    </main>
  );
}
