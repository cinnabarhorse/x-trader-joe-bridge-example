import { ChainId } from "@layerzerolabs/lz-sdk";
import { Token } from "@layerzerolabs/x-trader-joe-bridge";

const tokens = [
  new Token(
    ChainId.POLYGON,
    "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    18,
    "GHST"
  ),
  new Token(
    ChainId.ETHEREUM,
    "0x3f382dbd960e3a9bbceae22651e88158d2791550",
    18,
    "GHST"
  ),
  // new Token(
  //   ChainId.AVALANCHE,
  //   "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
  //   18,
  //   "JOE"
  // ),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: "0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07",
  },
];

export const mainnet = { tokens, proxy };
