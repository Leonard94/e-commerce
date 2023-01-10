import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  view: 'primary' | 'secondary' | 'rectangle'
  type: 'button' | 'submit'
  onClick?: () => void
  full?: boolean
  small?: boolean
  disabled?: boolean
  style?: React.CSSProperties
}

export const Button: React.FC<TProps> = (props) => {
  const { children, view, type, onClick, full, small, disabled, style } =
    props

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (onClick) {
      event.preventDefault()
      event.stopPropagation()
      onClick()
    }
  }

  const btnClass = classnames(styles.btn, {
    [styles[view]]: view,
    [styles.btn_full]: full,
    [styles.btn_small]: small,
  })

  return (
    <button
      className={btnClass}
      onClick={clickHandler}
      disabled={disabled}
      type={type}
      style={style}
    >
      {children}
    </button>
  )
}
