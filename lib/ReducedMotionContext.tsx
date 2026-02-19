import { createContext } from 'react'

interface ReducedMotionContextType {
  reduced: boolean
  setReduced: (reduced: boolean) => void
}

export const ReducedMotionContext = createContext<ReducedMotionContextType>({
  reduced: false,
  setReduced: () => {},
})

export const ReducedMotionProvider = ReducedMotionContext.Provider
