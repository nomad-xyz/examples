import wETHIcon from './assets/WETH.png'
import USDTIcon from './assets/USDT.png'
import DEVIcon from './assets/DEV.png'
import wADAIcon from './assets/wADA.png'

import * as config from '@nomad-xyz/configuration'

/******** NOMAD NETWORKS CONFIG ********/
const isProduction = process.env.production === 'production'
const env = isProduction ? 'production' : 'development'
export const nomadConfig = config.getBuiltin(env)

/******** MISC CONFIG ********/
// used to retrieve message proofs for processing tx on receiving chain
export const s3URL = isProduction ? 'https://nomadxyz-production-proofs.s3.us-west-2.amazonaws.com/' : 'https://nomadxyz-development-proofs.s3.us-west-2.amazonaws.com/'

/******** TOKEN TYPES ********/
export type TokenIdentifier = {
  domain: NetworkName
  id: string
}
export type TokenMetadata = {
  nativeNetwork: NetworkName // e.g. 'ethereum' for 'WETH' or 'USDT'
  symbol: string
  icon: string
  decimals: number
  tokenIdentifier: TokenIdentifier // { domain: networkName, id: tokenAddress(on native chain) }
  nativeOnly: boolean // only exists on native network. e.g. 'ETH' can only be on Ethereum. It is wrapped (WETH) on other networks
}

/******** TOKEN IDENTIFIERS ********/
const WETH: TokenIdentifier = {
  domain: 'kovan', // must be lowercase
  id: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
}
const USDT: TokenIdentifier = {
  domain: 'kovan',
  id: '0x13512979ade267ab5100878e2e0f485b568328a4',
}
const DEV: TokenIdentifier = {
  domain: 'moonbasealpha',
  id: '0x0000000000000000000000000000000000000802',
}
const rWETH: TokenIdentifier= {
  domain: 'rinkeby',
  id: '0xc778417e063141139fce010982780140aa0cd5ab'
}
const wADA: TokenIdentifier = {
  domain: 'milkomedatestnet',
  id: '0x1a40217B16E7329E27FDC9cED672e1F264e07Cc2'
}

/******** TOKENS CONFIG ********/
export const tokens: { [key: string]: TokenMetadata } = {
  ETH: {
    nativeNetwork: 'rinkeby',
    symbol: 'Rinkeby ETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: rWETH,
    nativeOnly: true,
  },
  WETH: {
    nativeNetwork: 'rinkeby',
    symbol: 'Rinkeby WETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: rWETH,
    nativeOnly: false,
  },
  kETH: {
    nativeNetwork: 'kovan',
    symbol: 'kETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: WETH,
    nativeOnly: true,
  },
  kWETH: {
    nativeNetwork: 'kovan', // must be lowercase
    symbol: 'kWETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: WETH,
    nativeOnly: false,
  },
  USDT: {
    nativeNetwork: 'kovan',
    symbol: 'USDT',
    icon: USDTIcon,
    decimals: 6,
    tokenIdentifier: USDT,
    nativeOnly: false,
  },
  DEV: {
    nativeNetwork: 'moonbasealpha',
    symbol: 'DEV',
    icon: DEVIcon,
    decimals: 18,
    tokenIdentifier: DEV,
    nativeOnly: true,
  },
  milkADA: {
    nativeNetwork: 'milkomedatestnet',
    symbol: 'milkADA',
    icon: wADAIcon,
    decimals: 18,
    tokenIdentifier: wADA,
    nativeOnly: true,
  },
  wADA: {
    nativeNetwork: 'milkomedatestnet',
    symbol: 'wADA',
    icon: wADAIcon,
    decimals: 18,
    tokenIdentifier: wADA,
    nativeOnly: false,
  }
}

/******** DYNAMIC TYPES ********/

// dynamically generate NetworkName type from config values
// type NetworkName = 'ethereum' | 'moonbeam' | 'milkomedaC1' | etc...
const networkList = [...nomadConfig.networks] as const
export type NetworkName = typeof networkList[number]

// dynamically generate TokenName type from config values
// type TokenName = 'ETH' | 'WETH' | 'USDC' | etc...
const tokenList = [...Object.keys(tokens)] as const
export type TokenName = typeof tokenList[number]
