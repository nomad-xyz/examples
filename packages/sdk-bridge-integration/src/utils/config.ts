import { NomadConfig } from '@nomad-xyz/configuration'
import {
  NetworkMetadata,
  NetworkMap,
  TokenMetadata,
  TokenMetadataMap,
  TokenIdentifierMap
} from './types'

import wETHIcon from '../assets/WETH.png'
import USDTIcon from '../assets/USDT.png'

export const getNetworksFromConfig = (
  config: NomadConfig,
  tokens: TokenMetadataMap
): NetworkMap => {
  const networks: NetworkMap = {}

  Object.keys(config.bridgeGui).forEach((networkName) => {
    const { displayName, nativeTokenSymbol, connections, manualProcessing } =
      config.bridgeGui[networkName]
    const nativeToken = tokens[nativeTokenSymbol]
    const { name, domain: domainID } = config.protocol.networks[networkName]
    const { chainId: chainID, blockExplorer } =
      config.protocol.networks[networkName].specs
    // use env values if available, else use rpcs provided by config
    const networkRPCs = config.rpcs[networkName]
    const rpcUrl = networkRPCs[0] // only 1 supported at the moment in the sdk
    const { optimisticSeconds } =
      config.protocol.networks[networkName].configuration
    const icon = nativeToken ? nativeToken.icon : ''

    networks[networkName] = {
      icon,
      name,
      rpcUrl,
      chainID,
      domainID,
      displayName,
      nativeToken,
      connections,
      blockExplorer,
      manualProcessing,
      optimisticSeconds,
    } as NetworkMetadata
  })

  return networks
}

const tokenIdentifiers: TokenIdentifierMap = {
  kWETH: {
    domain: 'kovan', // must be lowercase
    id: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
  },
  rWETH: {
    domain: 'rinkeby',
    id: '0xc778417e063141139fce010982780140aa0cd5ab'
  },
  USDT: {
    domain: 'kovan',
    id: '0x13512979ade267ab5100878e2e0f485b568328a4',
  },
}

export const tokens: { [key: string]: TokenMetadata } = {
  ETH: {
    nativeNetwork: 'rinkeby',
    name: 'Rinkeby ETH',
    symbol: 'rETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: tokenIdentifiers.rWETH,
    nativeOnly: true,
  },
  WETH: {
    nativeNetwork: 'rinkeby',
    name: 'Rinkeby WETH',
    symbol: 'rWETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: tokenIdentifiers.rWETH,
    nativeOnly: false,
  },
  kETH: {
    nativeNetwork: 'kovan',
    name: 'Kovan ETH',
    symbol: 'kETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: tokenIdentifiers.kWETH,
    nativeOnly: true,
  },
  kWETH: {
    nativeNetwork: 'kovan', // must be lowercase
    name: 'Kovan WETH',
    symbol: 'kWETH',
    icon: wETHIcon,
    decimals: 18,
    tokenIdentifier: tokenIdentifiers.kWETH,
    nativeOnly: false,
  },
  USDT: {
    nativeNetwork: 'kovan',
    name: 'kovan USDT',
    symbol: 'USDT',
    icon: USDTIcon,
    decimals: 6,
    tokenIdentifier: tokenIdentifiers.USDT,
    nativeOnly: false,
  }
}
