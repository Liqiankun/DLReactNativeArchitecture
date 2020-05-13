import {
  CHNAGE_STACK
} from '../types/login'

export function changeStack() {
  console.log('--------')
  return {
    type: CHNAGE_STACK
  }
}