  import UseCurrencyInfo from './hooks/UseCurrencyInfo';
import {InputBox} from './component/Index'
import { useState } from 'react';


function App() {
const [amount,setAmount]=useState("")
const [From , setFrom]=useState("usd")
const [To , setTo]=useState("pkr")
const [convertedAmount,setConvertedAmount]=useState("")

const currencyInfo=UseCurrencyInfo(From)
const options = Object.keys(currencyInfo)

const converted=()=> {setConvertedAmount (amount*currencyInfo[To])}

const swap =()=>{
  setFrom(To)
  setTo(From)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}


   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/32818745/pexels-photo-32818745.jpeg')`,
                backgroundPosition:"center",
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converted()      
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                 amount={amount}
                                currencyOption={options}
                                selectCurrency={From}
                                onchangecurrency={(currency)=>setFrom(currency)}
                                onchangeAmount={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                selectCurrency={To}
                              onchangecurrency={(currency)=>setTo(currency)}
                                onchangeAmount={(amount)=>setAmount(amount)}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {From.toUpperCase()} To {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

  export default App
