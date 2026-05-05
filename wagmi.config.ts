import { defineConfig } from "@wagmi/cli";
import { actions } from "@wagmi/cli/plugins";
import { readFileSync } from "node:fs";

const C0 = JSON.parse(readFileSync("./abis/C0.json", "utf8"));
const ISwapFacility = JSON.parse(readFileSync("./abis/ISwapFacility.json", "utf8"));
const IUniswapV3SwapAdapter = JSON.parse(readFileSync("./abis/IUniswapV3SwapAdapter.json", "utf8"));

const C0_DROP = new Set([
  "CANCEL_AUTHORIZATION_TYPEHASH",
  "PERMIT_TYPEHASH",
  "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
  "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
  "DOMAIN_SEPARATOR",
  "eip712Domain",
  "nonces",
  "cancelAuthorization",
  "receiveWithAuthorization",
  "transferWithAuthorization",
  "authorizationState",
  "ASSET_CAP_MANAGER_ROLE",
  "DEFAULT_ADMIN_ROLE",
  "FREEZE_MANAGER_ROLE",
  "PAUSER_ROLE",
  "YIELD_RECIPIENT_MANAGER_ROLE",
  "M_DECIMALS",
  "initialize",
  "supportsInterface",
  "mToken",
  "swapFacility",
  "assetDecimals",
  "isAllowedAsset",
  "isAllowedToReplaceAssetWithM",
  "isAllowedToWrap",
  "isAllowedToUnwrap",
  "replaceAssetWithM",
]);

const SWAP_FACILITY_DROP = new Set([
  "swapWithPermit",
  "replaceAssetWithMWithPermit",
  "setAdminApprovedExtension",
  "setPermissionedExtension",
  "setPermissionedMSwapper",
  "swapInM",
  "swapOutM",
]);

const filterAbi = (abi: any[], drop: Set<string>) =>
  abi.filter((item) => item.type !== "function" || !drop.has(item.name));

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    { name: "C0", abi: filterAbi(C0.abi, C0_DROP) },
    { name: "SwapFacility", abi: filterAbi(ISwapFacility.abi, SWAP_FACILITY_DROP) },
    { name: "SwapAdapter", abi: IUniswapV3SwapAdapter.abi },
  ],
  plugins: [actions()],
});
