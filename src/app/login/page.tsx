"use client"

import { useAuth0 } from "@auth0/auth0-react"
import { redirect } from "next/navigation"

export default function Page(){
    const { loginWithPopup, isAuthenticated, isLoading } = useAuth0()
    
    if(isAuthenticated){
        redirect('/painel')
    }

    if(isLoading){
        return(<div>Carregando...</div>)
    } else {
            return(
                <button onClick={()=> loginWithPopup()}>Fazer Login</button>
            )
    }
}