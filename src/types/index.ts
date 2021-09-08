export interface OneInchProps {
  apiUrl?: string
  apiVersion?: string
  chainId?: number
}

export interface ICalldata {
  tokenAddress: string
  amount?: string
  infinity?: boolean
}

export interface IQuote {
  fromTokenAddress: string
  toTokenAddress: string
  amount: string
  fee?: string
  protocols?: string
  gasPrice?: string
  complexityLevel?: string
  connectorTokens?: string
  gasLimit?: number
  parts?: number
  mainRouteParts?: number
}

export interface ISwap {
  fromTokenAddress: string
  toTokenAddress: string
  amount: string
  fromAddress: string
  slippage: number
  protocols?: string
  destReceiver?: string
  referrerAddress?: string
  fee?: number
  gasPrice?: string
  burnChi?: boolean
  complexityLevel?: string
  connectorTokens?: string
  allowPartialFill?: boolean
  disableEstimate?: boolean
  gasLimit?: number
  mainRouteParts?: number
  parts?: number
}

export enum IBlockchains {
  ETH = 1,
  BSC = 56,
  POLYGON = 137,
  OPTIMISM = 10
}
