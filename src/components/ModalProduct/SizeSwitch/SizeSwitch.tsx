import { useState } from 'react'

import styles from './styles.module.scss'

const options = ['Маленькая', 'Средняя', 'Большая']

export const SizeSwitch = () => {
  const [activeOption, setActiveOption] = useState(options[0])

  const handleClick = (option: string) => {
    setActiveOption(option)
  }

  console.log('activeOption =>> ', activeOption)

  return (
    <div className={styles.switch}>
      {options.map((option) => {
        const className = option === activeOption ? styles.active : ''
        return (
          <span
            key={option}
            className={className}
            onClick={() => handleClick(option)}
          >
            {option}
          </span>
        )
      })}
    </div>
  )
}
