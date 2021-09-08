import { beforeAll, describe, expect, it } from '@jest/globals'

import OneInch from '../src/index'

describe('Testing OneInch', () => {
  let oneInch: OneInch
  it('should exists', () => {
    expect(OneInch).toBeDefined
  })

  beforeAll(() => {
    oneInch = new OneInch()
  })

  describe('check basics', () => {
    it('oneInch instance should exists', () => {
      expect(oneInch).toBeDefined
    })
  })
})
