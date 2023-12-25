import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId();
  return (
    <div
      className={`text-white flex flex-wrap gap-10 mb-3 bg-zinc-100 rounded-md p-5 font-bold text-lg ${className}`}
    >
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          <label htmlFor={inputId} className="text-gray-600">
            {label}
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            value={amount}
            className="h-10 text-black outline-none bg-transparent"
            onChange={(e) =>
              onAmountChange &&
              !isNaN(e.target.value) &&
              onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Currency Type</label>
          <select
            value={selectedCurrency}
            className="bg-gray-200 rounded-lg text-black p-2 text-sm"
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
