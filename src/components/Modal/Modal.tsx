import { Portal } from './Portal/Portal'
import { Layout } from './Layout/Layout'

import { useMount } from './useMount'

// @duplicate
type TProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
  type: 'center' | 'drawer'
}

export const Modal: React.FC<TProps> = ({
  isOpen,
  children,
  onClose,
  type,
}) => {
  const { isMounted } = useMount({ isOpen })

  if (!isMounted) {
    return null
  }

  return (
    <Portal>
      <Layout onClose={onClose} isOpen={isOpen} type={type}>
        {children}
      </Layout>
    </Portal>
  )
}
