"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { WagmiProvider, createConfig, createStorage, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { del, get, set } from "idb-keyval";
import { MonadTestnet } from "./chains";


const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [MonadTestnet],
    transports: {
      [MonadTestnet.id]: http(
        `https://monad-testnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
      ),
    },

    walletConnectProjectId: process.env.projectId as string,

    storage: createStorage({
      storage: {
        async getItem(name) {
          return get(name);
        },
        async setItem(name, value) {
          await set(name, value);
        },
        async removeItem(name) {
          await del(name);
        },
      },
    }),

    // Required App Info
    appName: "GP-Website",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "../../assets/img/Icon.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

// @ts-expect-error
export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="midnight">{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
