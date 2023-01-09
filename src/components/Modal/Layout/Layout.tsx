import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import animation from './animation.module.scss'
import styles from './styles.module.scss'
import * as Icon from '@assets/icons/index'

const overlayAnimation = {
  enter: animation.overlayEnter,
  enterActive: animation.overlayEnterActive,
  exit: animation.overlayExit,
  exitActive: animation.overlayExitActive,
}

const bodyAnimation = {
  enter: animation.bodyEnter,
  enterActive: animation.bodyEnterActive,
  exit: animation.bodyExit,
  exitActive: animation.bodyExitActive,
}

// @duplicate
type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Layout: React.FC<TProps> = ({ onClose, children, isOpen }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const [animationIn, setAnimationIn] = useState(false)

  useEffect(() => {
    setAnimationIn(isOpen)
  }, [isOpen])

  return (
    <div className={styles.modal}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={bodyRef}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={bodyAnimation}
      >
        <div ref={bodyRef} className={styles.body}>
          <span className={styles.close} onClick={onClose}>
            <Icon.Close />
          </span>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}
