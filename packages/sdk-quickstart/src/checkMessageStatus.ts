import { BridgeContext, TransferMessage } from "@nomad-xyz/sdk-bridge";
import { getProd } from "./registerRpc";

async function main(){
    // This uses a helper function defined in ./registerRpcs.ts
    // to register RPCs placed in environment variables
    const core = getProd() 
    
    // Which domains are registered? 
    console.log(`Registered Domains: ${core.domainNames}`)
    
    // If you have one available, you can instantiate 
    // a Bridge Context from an existing NomadContext 
    const bridge = BridgeContext.fromNomadContext(core)

    // You can also start from an existing builtin configuration
    // Note: you'll have to register RPCs still! 
    // const bridge = new BridgeContext("production");

    // We want to inspect the status of a Nomad Message, we can start with the 
    // Transaction Hash from the initial `Send` transaction dispatched by the end-user.
    const txHash = "0x353446ff1ca230f9e071989592d90cd8ba80609951020fd0787d89ce051b9818"
    // This message was sent on Ethereum
    // https://etherscan.io/tx/0xe6b04d0e9c2f3593381849ca25b352c6f84a8bcb62dbc6834380ef39248cc5e1
    const originDomain = "ethereum"

    // Fetch the transaction from the blockchain (makes RPC calls)
    const messageToInspect = await TransferMessage.singleFromTransactionHash(bridge, originDomain, txHash);
    // On which domain did this message originate? 
    console.log(`Origin Domain: ${messageToInspect.origin}`);
    // To which Domain is this message destined for?
    console.log(`Destination Domain: ${messageToInspect.destination}`);
    // What address sent this message?
    console.log(`Sender: ${messageToInspect.sender}`);
    // What Address is this message destined for?
    console.log(`Recipient: ${messageToInspect.recipient}`);

    // // What was the token symbol of the token that was transferred in this message? 
    // const tokenId = messageToInspect.token.id;
    // const tokenDomain = messageToInspect.token.domain;
    // // Resolve the canonical token 
    // const canonicalToken = await messageToInspect.assetAtOrigin()
    // console.log(`Token Symbol: ${canonicalToken.symbol()}`)
}

(async () => {
    await main()
})()