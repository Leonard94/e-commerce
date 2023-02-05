import classNames from 'classnames'

import { ReactComponent as IconCompleted } from '@assets/icons/check.svg'
import styles from './styles.module.scss'

type TProps = {
  label: string
  currentStep: number
  index: number
  lastStep?: boolean
}

export const ProgressItem: React.FC<TProps> = ({
  label,
  currentStep,
  index,
  lastStep,
}) => {
  const isCompleted = currentStep > index

  const classStep = classNames(styles.step, {
    [styles.step_completed]: isCompleted,
  })
  const classLine = classNames(styles.line, {
    [styles.line_completed]: isCompleted,
  })

  return (
    <>
      <div className={classStep}>
        <div className={styles.circle}>
          {isCompleted ? <IconCompleted /> : index}
        </div>
        <span className={styles.label}>{label}</span>
      </div>
      {!lastStep && <span className={classLine} />}
    </>
  )
}
