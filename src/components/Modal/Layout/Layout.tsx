import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import animation from './animation.module.scss'
import styles from './styles.module.scss'
import * as Icon from '@assets/icons/index'

// todo зарефакторить названия анимаций!
// todo 2 почти одинаковых модальных окна. Зарефакторить!

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

const centerAnimation = {
  enter: animation.centerEnter,
  enterActive: animation.centerEnterActive,
  exit: animation.centerExit,
  exitActive: animation.centerExitActive,
}

// @duplicate
type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
  type: 'drawer' | 'center'
}

export const Layout: React.FC<TProps> = ({
  onClose,
  children,
  isOpen,
  type,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const [animationIn, setAnimationIn] = useState(false)

  useEffect(() => {
    setAnimationIn(isOpen)
  }, [isOpen])

  if (type === 'drawer') {
    return (
      <div className={styles.drawer}>
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
          <div ref={bodyRef} className={styles.drawer_body}>
            <span className={styles.close} onClick={onClose}>
              <Icon.Close />
            </span>
            {children}
          </div>
        </CSSTransition>
      </div>
    )
  }
  return (
    <div className={styles.center}>
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
        classNames={centerAnimation}
      >
        <div ref={bodyRef} className={styles.center_body}>
          <span className={styles.close_center} onClick={onClose}>
            <Icon.Close />
          </span>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}
