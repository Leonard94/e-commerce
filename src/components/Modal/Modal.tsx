import { Portal } from './Portal/Portal'
import { Layout } from './Layout/Layout'

import { useMount } from './useMount'


// @duplicate
type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<TProps> = ({ isOpen, children, onClose }) => {
  const { isMounted } = useMount({ isOpen })

  if (!isMounted) {
    return null
  }

  return (
    <Portal>
      <Layout onClose={onClose} isOpen={isOpen}>
        {children}
      </Layout>
    </Portal>
  )
}
