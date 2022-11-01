import { Header } from "./components/Header/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
