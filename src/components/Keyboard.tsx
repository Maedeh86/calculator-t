
type KeyboardProps = {
  onClick: (value: string) => void;
};

const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];

const operators = ["+", "-", "*", "/", "=", "C", "%"];

export default function Keyboard({ onClick }: KeyboardProps) {
  return (
    <div>
      <div>
        {digits.map((digit) => (
          <button
            key={digit}
            type="button"
            data-testid="keyboard-button"
            onClick={() => onClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>

      <div>
        {operators.map((operator) => (
          <button
            key={operator}
            type="button"
            data-testid="operator-button"
            onClick={() => onClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
}
