// store/possessions.ts
import { atom } from 'nanostores'

export const $possessions = atom([])

export function addStatus(possession) {
  $possessions.set([...$possessions.get(), possession]);
}