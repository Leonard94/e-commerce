import { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

type TProps = {
  children: React.ReactNode
}

export const Portal: React.FC<TProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDom.createPortal(children, container)
}
