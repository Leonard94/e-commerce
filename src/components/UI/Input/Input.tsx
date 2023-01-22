import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type TProps = {
  type: string
  name?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  error?: string | null
  onFocus?: () => void
}

export const Input: React.FC<TProps> = (props) => {
  const { type, name, value, onChange, placeholder, label, error, onFocus } =
    props

  const inputClass = classnames(styles.input, {
    [styles.input_invalid]: error,
  })

  return (
    <div className={styles.row}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        onFocus={onFocus}
      />
      {error && <p className={styles.message}>{error}</p>}
    </div>
  )
}
