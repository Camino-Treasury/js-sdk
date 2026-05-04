import { type Address } from "viem";
import { mainnet, base, sepolia } from "viem/chains";

export type C0Addresses = {
  c0: Address;
  swapFacility: Address;
  swapAdapter: Address;
  wrappedM: Address;
};

export const addresses = {
  [mainnet.id]: {
    c0: "0x00c000f9E58725ed0a712E457669cAD28B13EaEe",
    swapFacility: "0xB6807116b3B1B321a390594e31ECD6e0076f6278",
    swapAdapter: "0x023bd2F0A95373C55FC8D1c5F8e60cC3B9Bc4f4b",
    wrappedM: "0x437cc33344a0B27A429f795ff6B469C72698B291",
  },
  [sepolia.id]: {
    c0: "0x84f5b2a1f394abbe42fe71a2e1730ef2d33ed224",
    swapFacility: "0xea73853f28a897906cea9425e3821b2d1aa3d1f5",
    swapAdapter: "0x023bd2F0A95373C55FC8D1c5F8e60cC3B9Bc4f4b",
    wrappedM: "0x437cc33344a0B27A429f795ff6B469C72698B291",
  },
} as const satisfies Record<number, C0Addresses>;
