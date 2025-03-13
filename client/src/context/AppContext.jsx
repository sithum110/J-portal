import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider =(props)=>{

    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [IsSearched,setIsSearched] = useState(false)

    const value ={

        setSearchFilter,searchFilter,
        IsSearched,setIsSearched 

    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
      
}
