import React, { useEffect, useState } from 'react'

export function useIsMounted() {
    const [isMounted, setIsmounted] = useState(false);
    
    useEffect(() => {
        setIsmounted(true)
    }, [isMounted])
    
    return [isMounted]
} 

// чтоб истользовать собственный хук достаточно сделать вот так -> 
// const [isMounted] = useIsMounted()

export function calculate(items: number, multitiplier: number) {
    return new Array(items).fill(1).reduce((a,v) => a * multitiplier)
}
