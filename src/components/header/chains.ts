import { defineChain } from "viem";

export const MonadTestnet = defineChain({
  name: "Monad Testnet",
  id: 10143,
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.monad.xyz/"],
    },
  },
  blockExplorers: {
    default: {
      name: "monadexplorer",
      url: "https://testnet.monadexplorer.com/",
    },
  },
});
