import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'
import Loading from 'components/Loading'

function Form ({ onClose }) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setIsLoading(true)
    fetch('https://ancient-thicket-10868.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        onClose(true)
      })
      .catch(err => {
        setIsLoading(false)
        console.error(err)
      })
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loading />}

      <div className={errors.email ? styles.inputError : styles.input}>
        <label>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={errors.email ? styles.iconError : styles.icon}
          />
          <input
            className={errors.email ? styles.emailError : styles.email}
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
        </label>
      </div>

      <div className={errors.name ? styles.inputError : styles.input}>
        <label>
          <FontAwesomeIcon
            icon={faUser}
            className={errors.name ? styles.iconError : styles.icon}
          />
          <input
            className={errors.name ? styles.emailError : styles.email}
            type='text'
            placeholder='Nombre'
            {...register('name', { required: true })}
          />
        </label>
      </div>

      <textarea
        className={styles.message}
        name='message'
        {...register('message', { required: true })}
        placeholder='Mensage'
      ></textarea>

      <button className={styles.submit}>Enviar</button>

      {errors.email && (
        <div className={styles.errors}>
          <span>El email es requerido</span>
        </div>
      )}

      {errors.name && (
        <div className={styles.errors}>
          <span>El nombre es requerido</span>
        </div>
      )}

      {errors.message && (
        <div className={styles.errors}>
          <span>El mensaje es requerido</span>
        </div>
      )}
    </form>
  )
}

export default Form
