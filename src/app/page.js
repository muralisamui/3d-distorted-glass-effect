import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Scene from '@/components/Scene/Scene';

// const Scene = dynamic(() => import('@/components/Scene/Scene'), {
//     ssr: false,
// })

export default function Home() {
  return (
    <main className={styles.main}>
        <Scene />
    </main>
  )
}
