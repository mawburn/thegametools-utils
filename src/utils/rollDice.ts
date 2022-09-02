import { randomInt } from './randomInt'

export const rollDice = (size: number, count = 1) => {
  let result = 0

  for (let i = 0; i < count; i++) {
    result += randomInt(1, size)
  }

  return result
}
