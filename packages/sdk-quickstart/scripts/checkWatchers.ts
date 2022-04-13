import { BridgeContext, TransferMessage } from "@nomad-xyz/sdk-bridge";
import { configureRpcs } from "../lib/registerRpc";
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import { getEvents } from "@nomad-xyz/sdk";

async function main(){
    // This uses a helper function defined in ./registerRpcs.ts
    // to register RPCs placed in environment variables
    const context = configureRpcs("production") 

    // Which domains are registered? 
    console.log(`Registered Domains: ${context.domainNames}`)

    for (const domain of context.domainNames) {
        if(domain=="moonbeam")
            continue
        console.log(`Fetching Watcher configuration for ${domain}`);

        const core = context.mustGetCore(domain);
        const connectionManager = core.xAppConnectionManager
        const permissionEventFilter = connectionManager.filters.WatcherPermissionSet()
        
        const permissionEvents = await getEvents(
            context, 
            domain, 
            connectionManager, 
            permissionEventFilter
        )

        for (const event of permissionEvents) {
            const domainName = context.resolveDomainName(event.args[0])
            console.log(`Watcher Permission Event: \n\t Domain: ${domainName} \n\t Address: ${event.args[1]} \n\t Access: ${event.args[2]}`)
        }
    }
}

(async () => {
    await main()
})()