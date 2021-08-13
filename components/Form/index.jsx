import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'

function Form () {
  const { handleSubmit, register } = useForm()

  const onSubmit = data => {
    console.log(JSON.stringify(data))
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ponte en contacto</h1>
      <h3 className={styles.subtitle}>
        Si quieres ponerte en contacto, hablarme para participar en un projecto
        o simplemente saludar, mandame un mensaje llenando el siguiente
        formulario o mandame un mensaje a mí cuenta de twitter @rokujs y
        hablamos 😁
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <label>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input
              className={styles.email}
              type='email'
              placeholder='Email'
              {...register('email')}
            />
          </label>
        </div>
        <div className={styles.input}>
          <label>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              className={styles.email}
              type='text'
              placeholder='Nombre'
              {...register('name')}
            />
          </label>
        </div>

        <textarea
          className={styles.message}
          name='message'
          {...register('message')}
          placeholder='Mensage'
        ></textarea>
        <button className={styles.submit}>Enviar</button>
      </form>
    </div>
  )
}

export default Form
