import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            rem sequi repellat excepturi eos iusto esse voluptatem animi
            voluptas. Pariatur corrupti illo repellendus aut quos nostrum maxime
            exercitationem perspiciatis sint?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
            ratione, sequi quibusdam minus ipsam repellendus eum. Labore,
            voluptate, eveniet rerum molestiae error reprehenderit aspernatur
            qui voluptas, architecto cupiditate tenetur.
          </p>
        </main>
      </div>
    </div>
  );
}
