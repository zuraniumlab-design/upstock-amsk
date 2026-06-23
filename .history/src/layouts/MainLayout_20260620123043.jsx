import styles from '../css/layouts/MainLayout.module.css'

export default function MainLayout(children) {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}