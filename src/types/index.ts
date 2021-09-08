export interface OneInchProps {
  apiUrl?: string
  apiVersion?: string
  chainId?: number
}

export enum IBlockchains {
  ETH = 1,
  BSC = 56,
  POLYGON = 137,
  OPTIMISM = 10
}
