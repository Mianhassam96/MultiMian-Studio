import React from 'react'

type RMContext = {
  reduced: boolean
  setReduced: (v:boolean)=>void
}

export const ReducedMotionContext = React.createContext<RMContext | undefined>(undefined)

export function useReducedMotionPref(){
  const ctx = React.useContext(ReducedMotionContext)
  if(!ctx) throw new Error('useReducedMotionPref must be used within provider')
  return ctx
}
