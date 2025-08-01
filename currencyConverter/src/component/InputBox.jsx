import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onchangeAmount,
    onchangecurrency,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const inputamountID=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={inputamountID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={inputamountID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>{onchangeAmount && onchangeAmount(Number(e.target.value))}}
                    disabled={amountDisable}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onchangecurrency && onchangecurrency(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;