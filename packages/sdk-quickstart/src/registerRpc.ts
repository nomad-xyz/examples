import { NomadContext } from "@nomad-xyz/sdk";
import * as dotenv from "dotenv";

export function getProd(): NomadContext {
    dotenv.config();
    const ethereumRpc = process.env.ETHEREUM_RPC;
    const moonbeamRpc = process.env.MOONBEAM_RPC;
    const milkomedaC1Rpc = process.env.MILKOMEDAC1_RPC;
    
    if(!ethereumRpc)
        throw Error("Please set ETHEREUM_RPC and run this script again.")
    if(!moonbeamRpc)
        throw Error("Please set MOONBEAM_RPC and run this script again.")
    if(!milkomedaC1Rpc)
        throw Error("Please set MILKOMEDAC1_RPC and run this script again.")

    const core = new NomadContext("production");
    core.registerRpcProvider("ethereum", ethereumRpc);
    core.registerRpcProvider("moonbeam", moonbeamRpc);
    core.registerRpcProvider("milkomedaC1", milkomedaC1Rpc);
    
    return core
}