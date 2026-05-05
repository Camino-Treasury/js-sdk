/**
 * Withdraw the sender's full C0 balance back to USDC via the Uniswap V3 SwapAdapter.
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
  writeSwapAdapterSwapOut,
} from "@camino-treasury/sdk";

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as const;

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const config = createConfig({
  chains: [mainnet],
  transports: { [mainnet.id]: http(process.env.ETH_RPC_URL) },
});

const { c0, swapAdapter } = addresses[mainnet.id];

// 1. Read current C0 balance — withdraw the whole thing.
const c0Balance = await readC0BalanceOf(config, {
  address: c0,
  args: [account.address],
});
if (c0Balance === 0n) throw new Error("no C0 balance to withdraw");

// 2. Approve the SwapAdapter to pull C0.
const approveHash = await writeC0Approve(config, {
  account,
  address: c0,
  args: [swapAdapter, c0Balance],
});
await waitForTransactionReceipt(config, { hash: approveHash });

// 3. Swap C0 -> USDC via Uniswap V3 (0.25% slippage tolerance, default routing path).
const minAmountOut = (c0Balance * 9975n) / 10000n;
const swapHash = await writeSwapAdapterSwapOut(config, {
  account,
  address: swapAdapter,
  args: [c0, c0Balance, USDC, minAmountOut, account.address, "0x"],
});
await waitForTransactionReceipt(config, { hash: swapHash });

console.log("withdrew in tx:", swapHash);
