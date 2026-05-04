# camino-sdk

TypeScript SDK for the [C0 stablecoin](https://caminotreasury.com) and Camino Treasury smart contracts.

`camino-sdk` ships [viem](https://viem.sh)-compatible read/write/simulate/watch actions for the C0 token, the swap facility, and the Uniswap V3 swap adapter — plus per-chain contract addresses so you don't have to hand-maintain them.

## Install

```bash
pnpm add camino-sdk viem
# or
npm install camino-sdk viem
# or
bun add camino-sdk viem
```

`viem >= 2` is a peer dependency.

## Usage

### Read C0 balance

```ts
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { readC0BalanceOf, addresses } from "camino-sdk";

const client = createPublicClient({ chain: mainnet, transport: http() });

const balance = await readC0BalanceOf(client, {
  address: addresses[mainnet.id].c0,
  args: ["0xYourAddressHere"],
});

console.log("C0 balance:", balance);
```

### Simulate + execute a swap

```ts
import { createWalletClient, custom, parseUnits } from "viem";
import { mainnet } from "viem/chains";
import {
  simulateSwapFacilitySwap,
  writeSwapFacilitySwap,
  addresses,
} from "camino-sdk";

const wallet = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum!),
});

const { request } = await simulateSwapFacilitySwap(wallet, {
  address: addresses[mainnet.id].swapFacility,
  args: [/* swap params */],
});

const txHash = await writeSwapFacilitySwap(wallet, request);
```

### Watch C0 transfer events

```ts
import { watchC0TransferEvent, addresses } from "camino-sdk";

const unwatch = watchC0TransferEvent(client, {
  address: addresses[mainnet.id].c0,
  onLogs: (logs) => console.log("New transfers:", logs),
});
```

### Per-chain addresses

```ts
import { addresses } from "camino-sdk";

addresses[1];        // Ethereum Mainnet
addresses[8453];     // Base
addresses[11155111]; // Sepolia testnet

// Each entry: { c0, swapFacility, swapAdapter, wrappedM }
```

## Contracts covered

| Contract            | Purpose                                                    |
| ------------------- | ---------------------------------------------------------- |
| **C0**              | The yield-bearing stablecoin (ERC-20).                     |
| **SwapFacility**    | Mint/redeem C0 by swapping in/out of the underlying M.     |
| **SwapAdapter**     | Swap USDC/USDT ↔ C0 via Uniswap V3 routing.                |

For protocol-level documentation see the **Smart Contracts** tab on
[docs.caminotreasury.com](https://docs.caminotreasury.com).

## Development

```bash
pnpm install
pnpm run generate   # regenerate src/generated.ts from abis/
pnpm run build      # bundle to dist/
pnpm run typecheck
```

ABIs live in [`abis/`](./abis) and are committed alongside the generated code so consumers don't need Foundry installed.

## License

MIT — see [LICENSE](./LICENSE).
