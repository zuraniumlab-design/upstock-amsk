import { Outlet } from 'react-router-dom'
import styles from '../css/layouts/MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}