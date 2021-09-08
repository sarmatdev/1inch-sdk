import httpClient from './httpClient'
import { buildRequestParams } from './utils'
import { IBlockchains, OneInchProps, ICalldata } from './types'

class OneInch {
  protected apiUrl = 'https://api.1inch.exchange'
  protected apiVersion = 'v3.0'
  protected chainId: number = IBlockchains.ETH

  constructor(config?: OneInchProps) {
    if (config && config.apiUrl) this.apiUrl = config.apiUrl
    if (config && config.apiVersion) this.apiVersion = config.apiVersion
    if (config && config.chainId) this.chainId = config.chainId
  }

  public async getCalldata(args: ICalldata) {
    const data = await this.fetchRequest('/approve/calldata', args)

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
      const { data } = await httpClient({ baseURL: url }).get(path, { params })

      return data
    } catch (err) {
      throw new Error(`Can not fetch ${url} : ${err}`)
    }
  }
}

export default OneInch
