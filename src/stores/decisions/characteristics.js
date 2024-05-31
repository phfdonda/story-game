// store/characteristics.ts
import { atom } from 'nanostores'

export const $characteristics = atom([])

export function addCharacteristic(characteristic) {
  $characteristics.set([...$characteristics.get(), characteristic]);
}