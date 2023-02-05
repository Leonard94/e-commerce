import { CurrentOrder } from './CurrentOrder/CurrentOrder'
import { Steps } from './Steps/Steps'
import { ProgressBar } from './ProgressBar/ProgressBar'

import styles from './styles.module.scss'

export const OrderPage = () => {
  return (
    <main>
      <div className='container'>
        <h2 className={styles.title}>Заказ на доставку</h2>
        <ProgressBar />
        <div className={styles.content}>
          <Steps />
          <CurrentOrder />
        </div>
      </div>
    </main>
  )
}
