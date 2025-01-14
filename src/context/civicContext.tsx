import React, { useMemo } from 'react'
import { CivicAuthProvider } from "@civic/auth/react"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from "@solana/web3.js"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

const CivicContext = ({ children } : React.PropsWithChildren )=>{
    const network = WalletAdapterNetwork.Mainnet
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