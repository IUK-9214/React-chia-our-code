import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_{}:[]"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, charAllow, numAllow, setPassword])


  const passwordRef = useRef(null)

  const passwordcopytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  useEffect(() => {
    PasswordGenerator()
  }, [length, numAllow, charAllow, PasswordGenerator])

  return (
    <>
      <div className="  w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className=" text-4xl text-center  py-4 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 bg-amber-50"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 px-3 py-1 shrink-0 text-white font-bold outline-none cursor-pointer transform scale-100 transition ease-in-out duration-200 hover:scale-100 active:scale-85"
            onClick={passwordcopytoclipboard}
          >
            Copy
          </button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lenght: ( {length} )</label>

            <input type="checkbox"
              id="Number"
              defaultChecked={numAllow}
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="Number">Number</label>

            <input type="checkbox"
              id="Character"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="Character">Character</label>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
