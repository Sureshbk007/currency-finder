import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");

  const currencyInfo = useCurrencyInfo(from);
  const currencyList = Object.keys(currencyInfo);
  const convertedAmount = amount * currencyInfo[to];

  function handleSwap() {
    setTo(from);
    setFrom(to);
  }
  return (
    <div className="w-screen h-screen bg-currencyBg flex justify-center items-center flex-wrap  ">
      <div className="md:border border-white p-6 backdrop-blur-sm rounded-md ">
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(val) => setAmount(val)}
          onCurrencyChange={(val) => setFrom(val)}
          currencyOptions={currencyList}
          selectedCurrency={from}
        />
        <InputBox
          label="To"
          amount={convertedAmount.toFixed(4)}
          onCurrencyChange={(val) => setTo(val)}
          currencyOptions={currencyList}
          selectedCurrency={to}
          amountDisable
        />
      </div>
      <button
        className="bg-blue-600 border-4 border-zinc-100 text-white py-2 px-4 rounded-lg absolute active:bg-blue-500"
        onClick={handleSwap}
      >
        Swap
      </button>
    </div>
  );
}

export default App;
