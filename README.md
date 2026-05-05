# @camino-treasury/sdk

TypeScript SDK for the [C0 stablecoin](https://caminotreasury.com) and Camino Treasury smart contracts.

Ships [viem](https://viem.sh) + [@wagmi/core](https://wagmi.sh)-compatible read/write/simulate/watch actions for the C0 token, the SwapFacility, and the Uniswap V3 SwapAdapter — plus per-chain contract addresses so you don't have to hand-maintain them.

## Install

```bash
bun add @camino-treasury/sdk @wagmi/core viem
# or
pnpm add @camino-treasury/sdk @wagmi/core viem
# or
npm install @camino-treasury/sdk @wagmi/core viem
```

`@wagmi/core >= 3` and `viem >= 2` are peer dependencies.

## Entry points

Everything is re-exported at the package root. The same surface is also available on stable subpaths if you want narrower imports:

```ts
import { addresses, readC0BalanceOf } from "@camino-treasury/sdk";
import { addresses } from "@camino-treasury/sdk/data";       // addresses + ABIs only
import { readC0BalanceOf } from "@camino-treasury/sdk/actions"; // read/write/simulate/watch helpers + ABIs
```

## Usage

### Read C0 balance

```ts
import { createConfig, http } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import { addresses, readC0BalanceOf } from "@camino-treasury/sdk";

const config = createConfig({
  chains: [mainnet],
  transports: { [mainnet.id]: http() },
});

const balance = await readC0BalanceOf(config, {
  address: addresses[mainnet.id].c0,
  args: ["0xYourAddressHere"],
});

console.log("C0 balance:", balance);
```

### Deposit USDC into C0

```ts
import {
  createConfig,
  http,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
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
const amount = parseUnits("100", 6);

const approveHash = await writeContract(config, {
  account,
  address: USDC,
  abi: erc20Abi,
  functionName: "approve",
  args: [swapFacility, amount],
});
await waitForTransactionReceipt(config, { hash: approveHash });

const swapHash = await writeSwapFacilitySwap(config, {
  account,
  address: swapFacility,
  args: [USDC, c0, amount, account.address],
});
await waitForTransactionReceipt(config, { hash: swapHash });
```

### Withdraw C0 back to USDC

```ts
import {
  addresses,
  readC0BalanceOf,
  writeC0Approve,
  writeSwapFacilityReplaceAssetWithM,
} from "@camino-treasury/sdk";

const { c0, swapFacility } = addresses[mainnet.id];

const amount = await readC0BalanceOf(config, {
  address: c0,
  args: [account.address],
});

const approveHash = await writeC0Approve(config, {
  account,
  address: c0,
  args: [swapFacility, amount],
});
await waitForTransactionReceipt(config, { hash: approveHash });

const withdrawHash = await writeSwapFacilityReplaceAssetWithM(config, {
  account,
  address: swapFacility,
  args: [USDC, c0, c0, amount, account.address],
});
await waitForTransactionReceipt(config, { hash: withdrawHash });
```

End-to-end runnable scripts live in [`examples/`](./examples).

### Watch C0 transfer events

```ts
import { watchC0TransferEvent, addresses } from "@camino-treasury/sdk";

const unwatch = watchC0TransferEvent(config, {
  address: addresses[mainnet.id].c0,
  onLogs: (logs) => console.log("New transfers:", logs),
});
```

### Per-chain addresses

```ts
import { addresses } from "@camino-treasury/sdk/data";

addresses[1];        // Ethereum Mainnet
addresses[11155111]; // Sepolia testnet

// Each entry: { c0, swapFacility, swapAdapter, wrappedM }
```

## Contracts covered

| Contract         | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| **C0**           | The yield-bearing stablecoin (ERC-20).                 |
| **SwapFacility** | Mint/redeem C0 by swapping in/out of the underlying M. |
| **SwapAdapter**  | Swap USDC/USDT ↔ C0 via Uniswap V3 routing.            |

For protocol-level documentation see the **Smart Contracts** tab on [docs.caminotreasury.com](https://docs.caminotreasury.com).

## Development

```bash
bun install
bun run generate   # regenerate src/generated.ts from abis/
bun run build      # bundle to dist/
bun run typecheck
```

ABIs live in [`abis/`](./abis) and are committed alongside the generated code so consumers don't need Foundry installed. `wagmi.config.ts` filters out unused functions (EIP-712 typehashes, authorization-flow helpers, role-name reads, internal protocol gates) before codegen, keeping the published `.d.ts` lean.

## License

MIT — see [LICENSE](./LICENSE).
