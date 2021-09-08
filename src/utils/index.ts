export function buildRequestParams(params: any): any {
  return {
    ...params
  }
}

export function toHex(value: string): string {
  const intValue = parseInt(value)

  return `0x${intValue.toString(16)}`
}
