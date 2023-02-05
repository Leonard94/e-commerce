import styles from './styles.module.scss'

type TProps = {
  title: string
  preview_url: string
  img_url: null | string
}

export const ProductPhoto: React.FC<TProps> = ({
  title,
  preview_url,
  img_url,
}) => {
  return (
    <div className={styles.photo}>
      <img
        src={`${process.env.REACT_APP_PRODUCT_URL}/${img_url || preview_url}`}
        alt={title}
      />
    </div>
  )
}
