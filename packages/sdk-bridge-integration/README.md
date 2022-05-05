# Nomad Bridge Integration

This is an example bridge ui integration using the [Nomad Bridge SDK](https://www.npmjs.com/package/@nomad-xyz/sdk-bridge).

- [Nomad Core SDK](https://docs.nomad.xyz/sdk/)
- [Nomad Bridge SDK](https://docs.nomad.xyz/sdk-bridge/)
- [Multi-Provider](https://docs.nomad.xyz/multi-provider/)
- [Nomad Docs](https://docs.nomad.xyz/bridge)
- [Nomad GUI](https://app.nomad.xyz)
- [Nomad Monorepo](https://github.com/nomad-xyz/monorepo)
- [Nomad GUI Repo](https://github.com/nomad-xyz/nomad-app)

## Project setup

Install Vue 3
```bash
npm install -g @vue/cli
```

Add RPC URLs to `.env` (see `.env.example`)

Commands:
```bash
npm install

// compiles and hot-reloads for development
npm run serve

// compiles in production environment
npm run serve-prod

// compiles and minifies for production
npm run build

// lints and fixes files
npm run lint

// runs unit tests
npm run test:unit
```

## Integration setup

1. Configure webpack with `wasm`, `syncWebAssembly` and `topLevelAwait` (see `vue.config.js`):

```ts
module: {
  rules: [
    {
      test: /\.wasm$/,
      type: 'webassembly/sync',
    },
  ],
},
plugins: [
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
],
devtool: 'source-map',
experiments: {
  syncWebAssembly: true,
  topLevelAwait: true,
},
```

2. Instantiate Bridge Context

```ts
const nomadSDK = await import('@nomad-xyz/sdk-bridge')
// possible values: development, staging or production
const nomad = new nomadSDK.BridgeContext('development')
// nomad.conf contains data about each network, such as chainId, domainId, latency time, etc
const { rpcs } = nomad.conf

// register rpcs for each network
// note these are public rpcs
Object.keys(rpcs).forEach((network: string) => {
  nomad.registerRpcProvider(network, rpcs[network][0])
})
```

## Integration notes

Validation:
 - Some native assets should be disabled on non-native chains. For example, native ETH is not available on Moonbeam, user should select WETH
 - Origin and destination networks must be different
 - Origin/destination must be supported (cannot select Kovan/Moonbase Alpha)
 - Send amount must not exceed user's balance
 - User should be connected to their wallet
 - User should be on the origin network
 - Origin and destination addresses should be valid addresses
 - User's wallet address should be the default destination address. Changing the destination address should be and "Advanced" feature. Sending funds to an address you don't controll can result in a permanent loss of funds

Gas:
 - There are no additional fees associated with Nomad, just pay gas!
 - Gas fees are paid in the native token on each chain (e.g. ETH on Ethereum or GLMR on Moonbeam). Thus, the amount of x token sent is the amount they will receive on the destination chain
 - When sending to Ethereum, user must return to complete their transaction. They will need to pay gas on Ethereum, but gas is actually 1/5 what it estimates. User can use any wallet and it will be sent to whatever recipient address they specified.

Other:
 - Bridging takes on average 35-60 minutes and, depending on the destination chain, user may need to return to pay for processing to receive their funds.
