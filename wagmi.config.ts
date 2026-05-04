import { defineConfig } from "@wagmi/cli";
import { actions } from "@wagmi/cli/plugins";
import { readFileSync } from "node:fs";

const C0 = JSON.parse(readFileSync("./abis/C0.json", "utf8"));
const ISwapFacility = JSON.parse(readFileSync("./abis/ISwapFacility.json", "utf8"));
const IUniswapV3SwapAdapter = JSON.parse(readFileSync("./abis/IUniswapV3SwapAdapter.json", "utf8"));

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    { name: "C0", abi: C0.abi },
    { name: "SwapFacility", abi: ISwapFacility.abi },
    { name: "SwapAdapter", abi: IUniswapV3SwapAdapter.abi },
  ],
  plugins: [actions()],
});
