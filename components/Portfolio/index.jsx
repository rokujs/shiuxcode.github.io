import Card from 'components/Card'
import style from './styles.module.css'

function Portfolio ({ projects }) {
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
            key={pro._id.$oid}
            technologies={pro.technologies}
            title={pro.title}
            images={pro.images}
            id={pro._id.$oid}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
