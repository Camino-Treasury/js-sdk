/**
 * Withdraw C0 back to USDC.
 *
 * Run with:
 *   PRIVATE_KEY=0x... ETH_RPC_URL=https://... bun run examples/withdraw.ts
 */
import { createConfig, http, waitForTransactionReceipt } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import { privateKeyToAccount } from "viem/accounts";
import {
  addresses,
  readC0BalanceOf,
  writeC0Approve,
  writeSwapFacilityReplaceAssetWithM,
} from "@camino-treasury/sdk";

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as const;

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const config = createConfig({
  chains: [mainnet],
  transports: { [mainnet.id]: http(process.env.ETH_RPC_URL) },
});

const { c0, swapFacility } = addresses[mainnet.id];

// 1. Read current C0 balance — withdraw the whole thing.
const amount = await readC0BalanceOf(config, {
  address: c0,
  args: [account.address],
});
if (amount === 0n) throw new Error("no C0 balance to withdraw");

// 2. Approve the SwapFacility to pull C0.
const approveHash = await writeC0Approve(config, {
  account,
  address: c0,
  args: [swapFacility, amount],
});
await waitForTransactionReceipt(config, { hash: approveHash });

// 3. Unwind C0 -> M -> USDC in a single call.
const withdrawHash = await writeSwapFacilityReplaceAssetWithM(config, {
  account,
  address: swapFacility,
  args: [USDC, c0, c0, amount, account.address],
});
await waitForTransactionReceipt(config, { hash: withdrawHash });

console.log("withdrew in tx:", withdrawHash);
