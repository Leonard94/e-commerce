import { useEffect, useState } from 'react'

export const useMount = ({ isOpen }: any) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true)
      document.body.style.overflow = 'hidden'
    } else if (!isOpen && isMounted) {
      setTimeout(() => {
        setIsMounted(false)
        document.body.style.overflow = 'unset'
      }, 300)
    }
  }, [isOpen])

  return {
    isMounted,
  }
}
