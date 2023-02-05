import { useState } from 'react'
import { ProgressItem } from './ProgressItem/ProgressItem'

import styles from './styles.module.scss'

export const ProgressBar = () => {
  const [currentStep, setStep] = useState(3)

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <ProgressItem label='Корзина' currentStep={currentStep} index={1} />
        <ProgressItem label='Регистрация' currentStep={currentStep} index={2} />
        <ProgressItem
          label='Оформление заказа'
          currentStep={currentStep}
          index={3}
        />
        <ProgressItem
          label='Заказ готовится'
          currentStep={currentStep}
          index={4}
          lastStep
        />
      </div>
    </div>
  )
}
