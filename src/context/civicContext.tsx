import React, { useMemo } from 'react'
import { CivicAuthProvider } from "@civic/auth/react"
// import {GatewayProvider} from "@civic/solana-gateway-react";
import {ConnectionProvider, useConnection, useWallet, WalletProvider} from '@solana/wallet-adapter-react'
import {clusterApiUrl, PublicKey} from "@solana/web3.js"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

const CivicContext = ({ children } : React.PropsWithChildren )=>{

    // const GATEKEEPER_NETWORK = "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"
    const network = WalletAdapterNetwork.Mainnet

    // const wallet = useWallet()
    // const { connection } = useConnection()

    const endpoint = useMemo(() =>clusterApiUrl(network), [network]);
    const wallets = useMemo( () => [],[network] )
    
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <CivicAuthProvider clientId={CLIENT_ID}>
                        {children}
                    </CivicAuthProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default CivicContext