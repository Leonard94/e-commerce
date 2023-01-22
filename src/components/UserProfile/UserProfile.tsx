import { useState } from 'react'

import { useAppSelector } from '@store/hooks'
import { getFirstLetterName } from '@utils/getFirstLetterName'

import { Button } from '@components/UI/Button/Button'
import { Modal } from '@components/Modal/Modal'

import styles from './styles.module.scss'
import { Auth } from '@components/Auth/Auth'

export const UserProfile = () => {
  const first_name = null
  const second_name = null

  const [isOpenModal, setOpenModal] = useState(false)

  const { isAuth } = useAppSelector((state) => state.user)

  return (
    <>
      {isAuth ? (
        <div className={styles.avatar}>
          <span>{getFirstLetterName(first_name, second_name)}</span>
        </div>
      ) : (
        <Button
          type='button'
          view='secondary'
          small
          onClick={() => setOpenModal(true)}
        >
          Войти
        </Button>
      )}
      <Modal
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
        type='center'
      >
        <Auth />
      </Modal>
    </>
  )
}
