import Card from 'components/Card'
import style from './styles.module.css'

function Portfolio ({ projects }) {
  console.log('prolects: ', projects)
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Portfolio</h1>
        <p className={style.description}>
          Mis proyectos van desde páginas web creadas con React.js, JavaScript
          vanilla y Node.js, y para videojuegos uso el motor Unity 3D. Revisa
          mis últimos proyectos.
        </p>
      </div>
      <div className={style.containerCards}>
        {projects.map(pro => (
          <Card
            key={pro.id}
            technologies={pro.technologies}
            title={pro.title}
            image={pro.images}
            id={pro.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
