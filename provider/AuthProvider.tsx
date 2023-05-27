'use client'
import React, {FC, PropsWithChildren, useEffect} from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
const AuthProvider: FC<PropsWithChildren<any>> = ({children}) => {

    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token')
        if(!token) {
            router.push('/dashboard/auth')
        }
    },[])

    return <>{children}</>
}
export default AuthProvider