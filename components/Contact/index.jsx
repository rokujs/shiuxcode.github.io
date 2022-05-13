import { useState } from 'react'

import Form from 'components/Form'

import styles from './styles.module.css'
import Sent from 'components/Sent'

function Contact () {
  const [wasSent, setWasSent] = useState(false)
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Ponte en contacto</h1>
      <p className={styles.subtitle}>
        Si quieres ponerte en contacto, hablarme para participar en un projecto
        o simplemente saludar, mandame un mensaje llenando el siguiente
        formulario o mandame un mensaje al correo <b>me@rokujs.me</b> y hablamos
        😁
      </p>
      {
      wasSent
        ? <Sent activeForm={setWasSent} />
        : <Form onClose={setWasSent} />
      }
    </main>
  )
}

export default Contact
