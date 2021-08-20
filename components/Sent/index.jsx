import styles from './styles.module.css'

function Sent ({ activeForm }) {
  const onReturn = () => {
    activeForm(false)
  }
  return (
    <div className={styles.container}>
      <span>
        Listo, el mensaje fue enviado, en el transcurso de la semana me pondre
        en contacto contigo. 👍
      </span>
      <button onClick={onReturn}>Enviar otro mensaje</button>
    </div>
  )
}

export default Sent
