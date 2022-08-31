import { useCallback, useMemo } from 'react'
import uniqueId from 'lodash/uniqueId'

export const useKey = <T>(list?: T[]) => {
  const keyPrefix = useMemo(() => {
    if (list) {
      return uniqueId('key')
    }
  }, [list])

  return useCallback((place: number) => `${keyPrefix}${place}`, [keyPrefix])
}
