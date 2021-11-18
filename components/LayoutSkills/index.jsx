import ListSkills from 'components/ListSkills'
import styles from './styles.module.css'

function LayoutSkills ({ skills }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <h3 className={styles.description}>
        Las habilidades que he ido desarrollando a lo largo de mi camino como
        programador se pueden clasificar en dos industrias, la industria de
        videojuegos y la web, me he preparado para ambas desarrollando buenas
        prácticas en React.js y en Unity, como también resuelto desafíos de
        lógica y optimización y en este camino e probado varias tecnologías para
        complementar mis conocimientos, como lo pueden ser las herramientas para
        el Back-end, modelado 3D, animación en 3D y 2D. Y el resultado de todo
        esto es el conocimiento en estas herramientas:
      </h3>

      <main className={styles.main}>
        <ListSkills skills={skills} />
      </main>
    </div>
  )
}

export default LayoutSkills
