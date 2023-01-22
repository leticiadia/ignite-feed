import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "src/assets/profile-image.jpeg",
      name: "Leticia Dias",
      role: "Full Stack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera! 😃🚀",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite.",
      },
      {
        type: "link",
        content: "#codeReactJS",
      },
    ],
    publishedAt: new Date("2022-12-08 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "src/assets/mikkaiser.jpeg",
      name: "Mikael Ribeiro",
      role: "Full Stack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera! 😃🚀",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite.",
      },
      {
        type: "link",
        content: "#nestJS",
      },
    ],
    publishedAt: new Date("2022-12-09 19:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post  => {
            return (
              <div>
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
