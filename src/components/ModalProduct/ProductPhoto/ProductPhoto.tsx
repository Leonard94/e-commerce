import styles from './styles.module.scss'

type TProps = {
  title: string
  preview_url: string
}

export const ProductPhoto: React.FC<TProps> = ({ title, preview_url }) => {
  return (
    <div className={styles.photo}>
      <img
        src={`${process.env.REACT_APP_PRODUCT_URL}/${preview_url}`}
        alt={title}
      />
    </div>
  )
}
