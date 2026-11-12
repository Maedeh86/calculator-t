
type KeyboardProps = {
  onClick: (value: string) => void;
};

const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];

const operators = ["+", "-", "*", "/", "=", "clear", "%"];

export default function Keyboard({ onClick }: KeyboardProps) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {digits.map((digit) => (
          <button
            key={digit}
            type="button"
            data-testid="keyboard-button"
            onClick={() => onClick(digit)}
            className="flex h-14 items-center justify-center rounded-xl bg-slate-700 text-xl font-semibold text-white transition hover:bg-slate-600 active:scale-95"
          >
            {digit}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {operators.map((operator) => (
          <button
            key={operator}
            type="button"
            data-testid="operator-button"
            onClick={() => onClick(operator)}
            className={`flex h-14 items-center justify-center rounded-xl text-lg font-semibold text-white transition active:scale-95 ${
              operator === "="
                ? "bg-blue-600 hover:bg-blue-500"
                : operator === "clear"
                  ? "bg-red-700 hover:bg-red-600"
                  : "bg-slate-600 hover:bg-slate-500"
            }`}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
}
