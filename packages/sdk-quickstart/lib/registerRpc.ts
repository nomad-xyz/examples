import { NomadContext } from "@nomad-xyz/sdk";
import * as dotenv from "dotenv";

export function configureRpcs(environment: string): NomadContext {
    dotenv.config();

    const core = new NomadContext(environment);
    const networks = core.conf.networks;
    networks.forEach(network => {
        const envVar = `${network.toUpperCase()}_RPC`
        const rpc = process.env[envVar]
        if(!rpc)
            throw Error(`RPC Environment variable missing when configuring ${network} in ${environment} -- set ${envVar} and try again.`)
        core.registerRpcProvider(network, rpc);
    });
    return core
}   