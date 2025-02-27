import { cryptoAssets, cryptoData } from "./data";

export function fakefetchCrypto(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoData)
        },2)
    })
}

export function fetchAssets(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoAssets)
        },2)
    })
}