import { createContext, useState } from "react";

const SymbolContext = createContext({
    selectedSymbol: '',
    watchedSymbols: [],
    watchedSymbolsLength: 0,
    addSymbol: (symbol)=>{},
    removeSymbol: (symbol)=>{},
    setSelected: (symbol)=>{},
    isInSymbolList: (symbol)=>{},
    toggleSymbol: (symbol)=>{},
});

export function SymbolContextProvider(props) {

    const [userSelectedSymbol, setUserSelectedSymbol] = useState('')
    const [userWatchedSymbols, setUserWatchedSymbols] = useState([])

    function toggleSymbolHandler(symbol){
        console.log(symbol)
        console.log(isInSymbolList(symbol))
        
        if(isInSymbolList(symbol)){
            addSymbolHandler(symbol)
        }
        else{
            removeSymbolHandler(symbol)
        }  
    }

    function addSymbolHandler(symbol){
        const newWatchedSymbols = (prev) => prev.concat(symbol)
        setUserWatchedSymbols(newWatchedSymbols)
    }

    function removeSymbolHandler(symbol){
        const newWatchedSymbols = (prev) => prev.filter(item => item !== symbol)
        setUserWatchedSymbols(newWatchedSymbols)
    }

    function isInSymbolList (symbol) {
        // TODO: For next part where items can be added to a watchlist
        // return userWatchedSymbols.some((item) => item == symbol)
        return symbol === userSelectedSymbol

    }

    function setUserSelectedHandler(symbol){
        setUserSelectedSymbol(symbol)
    }

    const context = {
        selectedSymbol: userSelectedSymbol,
        watchedSymbols:  userWatchedSymbols,
        watchedSymbolsLength: userWatchedSymbols.length,
        addSymbol: addSymbolHandler,
        removeSymbol: removeSymbolHandler,
        setSelected: setUserSelectedHandler,
        isInSymbolList: isInSymbolList,
        toggleSymbol:toggleSymbolHandler,
    }


    return (
        <SymbolContext.Provider value={context}>
            {props.children}
        </SymbolContext.Provider>
    )
}

export default SymbolContext
