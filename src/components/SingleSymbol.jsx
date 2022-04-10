import { useEffect, useState, useContext } from 'react'
import symbolPrice from '../api/symbolPrice'
import SymbolContext from '../store/symbol-context'
import RenderLineChart from './RenderLineChart'
import Fundamental from './Fundamental'

const GraphHeader = (props) => {
    return (
        <div>
            <div className="section">
                <h1 className='logo-name'><span>Daily Prices (open, high) </span></h1>
            </div>
        </div>
    )
}


const SingleSymbol = (props) =>  {
    const SymbolCtx = useContext(SymbolContext)
    const [currentSymbolData, setCurrentSymbolData] = useState({})
    const [data, setData] = useState([])

    const makeData = (raw) => {
        const d = Object.keys(raw) ? raw['Time Series (Daily)'] : {};
        const d2 = d ? Object.keys(d).map((item, ind, arr) => ({
            name: item,
            close: d[item]['4. close'],
            high: d[item]['2. high'],
          })) : [];
          
          setData(d2.reverse().slice(d2.length-30))
    }

    useEffect(()=>{
        if(SymbolCtx.selectedSymbol){
            symbolPrice(SymbolCtx.selectedSymbol)
            .then( d => {
                setCurrentSymbolData(d)
                makeData(d)
            })
        }
    },[SymbolCtx.selectedSymbol])



    return (
        <div className='main-content'>
            {/* <div>{JSON.stringify(currentSymbolData ? currentSymbolData['Meta Data'] : {})}</div> */}
            
            { SymbolCtx.selectedSymbol ? 
            <>
                <Fundamental />  
                <GraphHeader data={currentSymbolData ? currentSymbolData['Meta Data'] : {}} />
                <RenderLineChart data={data} />
            </>
             : <>
                <div class="notification is-primary">
                    <div className="section">
                        PLease search for a company on the left menu
                    </div>
                </div>
             </> }
            
        </div>
    )
}

export default SingleSymbol