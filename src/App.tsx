import { Header } from "../components/header";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/135028665?v=4',
      name: 'Mateus Gabriel',
      role: 'Front-end'
    },
    content: [
      {type: 'paragraph', content: 'Olá'},
      {type: 'paragraph', content: 'Estou aprendendo React, e esse é meu primeiro projeto.'},
      {type: 'link', content: 'github.com/MateusBrito1'},
    ],
    publishedAt: new Date('2023-07-26 19:00:00'),

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/564x/c6/5b/45/c65b459a545e0ebb330bdaaf94eff5f2.jpg',
      name: 'Amelia Brown',
      role: 'Full-stack'
    },
    content: [
      {type: 'paragraph', content: 'Hi,'},
      {type: 'paragraph', content: 'Systems analyst student, passionate about development and technology.'},
      {type: 'link', content: 'github.com/AmeliaBrown'}
    ],
    publishedAt: new Date('2023-07-26 19:10:00'),
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> )
          })}
        </main>
      </div>
    </div>
  );
}
