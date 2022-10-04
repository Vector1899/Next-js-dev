import React, { useState, useEffect } from 'react'

const WALLET_ADDRESS = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';

export const useNFTCollection = () => {
    const [asset, setAsset] = useState(null)
    useEffect(() => {
        // setInterval(() =>{
            const fetchData = async () => {
                try {
                    const options = {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'X-API-KEY': "7825c4057b6044719021ed683c40ddf9",
                        }
                    };
                    const response = await fetch(`https://api.opensea.io/api/v1/assets/?asset_contract_addresses=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`, options)
    
                    const res = await response.json()
                    
    
                    if (res) {
                        setAsset(res)
                    }
                } catch (error) {
                    console.error('Unable to fetch price data:', error)
                }
            }
            fetchData()
        // }, 5000)
        
    }, [setAsset])  
    return asset
} 