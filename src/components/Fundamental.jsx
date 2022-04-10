import { useEffect, useState, useContext } from 'react'
import SymbolContext from '../store/symbol-context'
import fundamentalData from '../api/fundamental'

const Fundamental = (props) =>  {
    const SymbolCtx = useContext(SymbolContext)
    const [data, setData] = useState({})

    useEffect(()=>{
        if(SymbolCtx.selectedSymbol){
            fundamentalData(SymbolCtx.selectedSymbol)
            .then( d => {
                console.log(d)
                setData(d)
            })
        }
    },[SymbolCtx.selectedSymbol])

    return Object.keys(data).length  ? (
        <div class='fundamental'>
            <h1 className='logo-name variant'><span>{data.Name}</span>{data.Symbol}</h1>

            <div className="section summary">
                <div className="description">
                    {data.Description}
                </div>
            </div>
            <div className='section quick-peek'>
                <div className="columns">
                    <div className="column">
                        <div className='info'><span>Asset Type</span>{data.AssetType}</div>
                        <div className='info'><span>Exchange</span>{data.Exchange}</div>
                        <div className='info'><span>Industry</span>{data.Industry}</div>
                        <div className='info'><span>Latest Quarter</span>{data.LatestQuarter}</div>
                        
                    </div>
                    <div className="column">
                        <div className={`info ${data.PEGRatio > 1 ? "red" : "green"}` }><span>PEG Ratio</span>{data.PEGRatio}</div>
                        <div className='info'><span>Book Value</span>{data.BookValue}</div>
                        <div className={`info ${data.PriceToBookRatio > 3 ? "red" : "green"}` }><span>Price To Book Ratio</span>{data.PriceToBookRatio}</div>
                        <div className={`info ${data.QuarterlyEarningsGrowthYOY < 0.1 ? "red" : "green"}` }><span>Quaterly Earnings Growth YoY</span>{data.QuarterlyEarningsGrowthYOY}</div>
                    </div>
                    
                </div>
            </div>
            {/* {JSON.stringify(data)} */}
        </div>
    ) : (  
        <div class='fundamental'>
             <h1 className='section logo-name variant'>Fundamental Data Not Available</h1>
        </div>
    )
}

export default Fundamental