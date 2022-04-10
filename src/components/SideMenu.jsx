import { useEffect, useState, useContext } from 'react'
import { Form,Container } from 'react-bulma-components'
import symbolSearch from '../api/symbolSearch'
import SymbolContext from '../store/symbol-context'

const Symbol = (props) =>  {
    const {name, symbol} = props;
    const SymbolCtx = useContext(SymbolContext)

    const isInWatchedSymbols = SymbolCtx.isInSymbolList(symbol)

    const addToSelected = () => {
        SymbolCtx.setSelected(symbol)

        if(isInWatchedSymbols)
            SymbolCtx.removeSymbol(symbol)
        else
            SymbolCtx.addSymbol(symbol)
    }
    

    return  (
        <div className='symbol-item columns' onClick={addToSelected}>
            <div className='item-info column is-four-fifths'>
                <div>
                    {name}
                </div> 
                <div>
                    (<span className='item-symbol'>{symbol}</span>)
                </div>
            </div>
            
            <div className='item-status column'>{isInWatchedSymbols ? "✅" : "" }</div>
        </div>
)}

const SideMenu = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (ev) => {
        ev.preventDefault();
        const res = await symbolSearch(searchQuery)
        console.log(res)
        setSearchResults(res)
    }

    return (
        <div className='side-menu'>
            <div className="section">
                <h1 className='logo-name'><span>Thirty</span>301</h1>
                <form onSubmit={handleSearch}>
                    <Form.Input
                        color="success"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            
            </div>
            <div className="section">
               {searchResults && searchResults.map((item, key) => <Symbol name={item.name} symbol={item.symbol} key={key} /> )}
            </div>
        </div>
        
    )


}

export default SideMenu