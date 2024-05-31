// store/statuss.ts
import { atom } from 'nanostores'

export const $statuses = atom([])

export function addStatus(status) {
  $statuses.set([...$statuses.get(), status]);
}