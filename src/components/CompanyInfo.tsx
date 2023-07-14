"use client"

import { collection, query, getDocs, where } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query"
import { db } from "@/services/firebase";

interface CompanyInfoProps {
    userId: string
}

export default function CompanyInfo({ userId }: CompanyInfoProps){

    const chartsCollection  = collection(db, "customer")
    const chartsFiltered = query(chartsCollection, where("user_id", "==", userId))

    const {data, isLoading} = useQuery(['customer'],{
        queryFn: async () => {
            const customerInfo = (await getDocs(chartsFiltered)).docs.map((doc) => ({ ...doc.data()}))
            return customerInfo
        }
    })

    if(isLoading){
        return(<div>Buscando Dados...</div>)
    }

    return(
        <div>
            <ul>
                {data && data.map((item, index)=> (
                    <li key={index}>{item.name}</li>
                ))}
                {data && data.map((item, index)=> (
                    <li key={index}>{item.description}</li>
                ))}
            </ul>
        </div>
    )
}