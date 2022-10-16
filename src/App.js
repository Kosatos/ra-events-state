import Portfolio from './components/filter/Portfolio';
import Store from './components/layouts/Store';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Portfolio />
      <Store />
    </div>
  );
}

export default App;
