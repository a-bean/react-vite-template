import { create } from 'zustand'
import type { HomeProps } from '@/types/home'

export const useHomeStore = create<HomeProps>((set) => ({
  name: '',
  setName: (name: string) => set({ name }),
}))
