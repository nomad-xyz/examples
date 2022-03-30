import { BridgeContext, TransferMessage } from "@nomad-xyz/sdk-bridge";
import { configureRpcs } from "../lib/registerRpc";
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";


async function main(){
    // This uses a helper function defined in ./registerRpcs.ts
    // to register RPCs placed in environment variables
    const core = configureRpcs("production") 

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
    // https://etherscan.io/tx/0x353446ff1ca230f9e071989592d90cd8ba80609951020fd0787d89ce051b9818
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
    
    // When does the fraud window for this message elapse? 
    const confirmsAt =  (await messageToInspect.confirmAt()).toNumber() * 1000
    console.log(`Fraud Proof Window Expiration: ${new Date(confirmsAt).toString()}`)

    // What was the token symbol of the token that was transferred in this message? 
    const tokenId = messageToInspect.token.id;
    const tokenDomain = messageToInspect.token.domain;
    // Resolve the canonical token 
    const canonicalToken = await messageToInspect.assetAtOrigin()
    // What is the symbol of the token being transferred?
    const symbol = await canonicalToken!.symbol()
    console.log(`Token Symbol: ${symbol}`)
    // How many decimals does the token have?
    const decimals = await canonicalToken!.decimals()
    console.log(`Token Decimals: ${decimals}`)
    // How many tokens were transferred? 
    // Note: amount is an @ethersproject/bignumber
    // Use ethers.utils.formatUnits to output human-readable BigNumber 
    const adjustedValue = ethers.utils.formatUnits(messageToInspect.amount, decimals)
    console.log(`Amount Transferred: ${adjustedValue}`)
}

(async () => {
    await main()
})()