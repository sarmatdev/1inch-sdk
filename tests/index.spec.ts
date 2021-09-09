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

  describe('Testing methods', () => {
    describe('Approve Calldata', () => {
      it('should be success', async () => {
        expect.assertions(1)
        const data = await oneInch.approveCalldata({
          tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        })

        expect(data.status).toBe(200)
      })
      it('should be failed by invalid tokenAddress', async () => {
        expect.assertions(1)
        try {
          await oneInch.approveCalldata({
            tokenAddress: '0x'
          })
        } catch (error) {
          expect(error).toEqual(new Error('"tokenAddress" is not valid.'))
        }
      })
    })
    describe('Healthcheck', () => {
      it('should be success', async () => {
        expect.assertions(1)
        try {
          const data = await oneInch.healthcheck()

          expect(data.status).toBe(200)
        } catch (error) {
          return error
        }
      })
    })
    describe('Protocols', () => {
      it('should be success', async () => {
        try {
          const data = await oneInch.protocols()

          expect(data.status).toBe(200)
        } catch (error) {
          return error
        }
      })
    })
    describe('Protocols Images', () => {
      it('should be success', async () => {
        try {
          const data = await oneInch.protocolsImages()

          expect(data.status).toBe(200)
        } catch (error) {
          return error
        }
      })
    })
    describe('Tokens', () => {
      it('should be success', async () => {
        expect.assertions(1)
        try {
          const data = await oneInch.tokens()

          expect(data.status).toBe(200)
        } catch (error) {
          return error
        }
      })
    })
  })
})
