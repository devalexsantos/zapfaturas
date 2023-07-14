"use client"

import CompanyInfo from "@/components/CompanyInfo"
import { useAuth0 } from "@auth0/auth0-react"
import { redirect } from 'next/navigation'

export default function Page(){
    
    const { isAuthenticated, user, isLoading } = useAuth0()

    if(isLoading){
        return(<div>Carregando...</div>)
    } else if(!isAuthenticated){
        redirect('/login')
    } 

    return(
        <div>
            {user && user.name}
            <hr/>
            {user && <CompanyInfo userId={user.sub as string} />}
        </div>
    )
}