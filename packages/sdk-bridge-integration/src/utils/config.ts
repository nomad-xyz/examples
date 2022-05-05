import { NomadConfig } from '@nomad-xyz/configuration'
import { NetworkMetadata, NetworkMap, TokenMetadataMap } from './types'

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