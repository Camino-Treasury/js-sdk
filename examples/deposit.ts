/**
 * Deposit USDC into C0.
 *
 * Run with:
 *   PRIVATE_KEY=0x... ETH_RPC_URL=https://... bun run examples/deposit.ts
 */
import { createConfig, http, waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import { erc20Abi, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { addresses, writeSwapFacilitySwap } from "@camino-treasury/sdk";

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as const;

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const config = createConfig({
  chains: [mainnet],
  transports: { [mainnet.id]: http(process.env.ETH_RPC_URL) },
});

const { c0, swapFacility } = addresses[mainnet.id];
const amount = parseUnits("100", 6); // 100 USDC

// 1. Approve the SwapFacility to pull USDC.
const approveHash = await writeContract(config, {
  account,
  address: USDC,
  abi: erc20Abi,
  functionName: "approve",
  args: [swapFacility, amount],
});
await waitForTransactionReceipt(config, { hash: approveHash });

// 2. Swap USDC -> C0 (1:1, minus protocol fees).
const swapHash = await writeSwapFacilitySwap(config, {
  account,
  address: swapFacility,
  args: [USDC, c0, amount, account.address],
});
await waitForTransactionReceipt(config, { hash: swapHash });

console.log("deposited in tx:", swapHash);
