import { utils } from 'ethers'
import httpClient from './httpClient'
import { buildRequestParams, toHex } from './utils'
import { IBlockchains, OneInchProps, ICalldata, IQuote, ISwap } from './types'

class OneInch {
  protected apiUrl = 'https://api.1inch.exchange'
  protected apiVersion = 'v3.0'
  protected chainId: number = IBlockchains.ETH

  constructor(config?: OneInchProps) {
    if (config && config.apiUrl) this.apiUrl = config.apiUrl
    if (config && config.apiVersion) this.apiVersion = config.apiVersion
    if (config && config.chainId) this.chainId = config.chainId
  }

  public async swap(args: ISwap) {
    if (!utils.isAddress(args.fromTokenAddress)) {
      throw new Error('"fromTokenAddress" is not valid.')
    }

    if (!utils.isAddress(args.toTokenAddress)) {
      throw new Error('"toTokenAddress" is not valid.')
    }

    if (!utils.isAddress(args.fromAddress)) {
      throw new Error('"fromAddress" is not valid.')
    }

    const data = await this.fetchRequest('/swap', args)

    return data
  }

  public async quote(args: IQuote) {
    if (!utils.isAddress(args.fromTokenAddress)) {
      throw new Error('"fromTokenAddress" is not valid.')
    }

    if (!utils.isAddress(args.toTokenAddress)) {
      throw new Error('"toTokenAddress" is not valid.')
    }

    const data = await this.fetchRequest('/quote', args)

    return data
  }

  public async approveCalldata(args: ICalldata) {
    if (!utils.isAddress(args.tokenAddress)) {
      throw new Error('"tokenAddress" is not valid.')
    }

    const data = await this.fetchRequest('/approve/calldata', args)
    data.value = toHex(data.value)

    return data
  }

  public async approveSpender() {
    const data = await this.fetchRequest('/approve/spender')

    return data
  }

  public async protocols() {
    const data = await this.fetchRequest('/protocols')

    return data
  }

  public async protocolsImages() {
    const data = await this.fetchRequest('/protocols/images')

    return data
  }

  public async tokens() {
    const data = await this.fetchRequest('/tokens')

    return data
  }

  public async healthcheck() {
    const data = await this.fetchRequest('/healthcheck')

    return data
  }

  private async fetchRequest(path: string, args?: unknown) {
    const params = buildRequestParams(args)
    const url = `${this.apiUrl}/${this.apiVersion}/${this.chainId}`

    try {
      const data = await httpClient({ baseURL: url }).get(path, { params })

      return data
    } catch (err) {
      throw new Error(`Can not fetch ${url} : ${err}`)
    }
  }
}

export default OneInch
