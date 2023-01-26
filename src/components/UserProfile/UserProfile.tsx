import { useState } from 'react'

import { useAppSelector } from '@store/hooks'
import { getFirstLetterName } from '@utils/getFirstLetterName'

import { Button } from '@components/UI/Button/Button'
import { Modal } from '@components/Modal/Modal'
import { Auth } from '@components/Auth/Auth'

import styles from './styles.module.scss'

export const UserProfile = () => {
  const first_name = null
  const second_name = null

  const { isAuth } = useAppSelector((state) => state.user)

  const [isOpenModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!isOpenModal)
  }

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
      <Modal isOpen={isOpenModal} onClose={toggleModal} type='center'>
        <Auth onClose={toggleModal} />
      </Modal>
    </>
  )
}
