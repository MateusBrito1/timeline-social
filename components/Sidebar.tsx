import { PencilLine } from 'phosphor-react'

import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/135028665?v=4" />
        
        <strong>Mateus Gabriel</strong>
        <span>Front-end</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu Perfil
            </a>
        </footer>
    </aside>
  );
}
