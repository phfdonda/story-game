// store/actions.ts
import { atom } from 'nanostores'

export const $actions = atom([])

export function addAction(action) {
  $actions.set([...$actions.get(), action]);
}