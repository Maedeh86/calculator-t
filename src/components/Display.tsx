
type DisplayProps = {
  input: string;
  result: string;
};

export default function Display({ input, result }: DisplayProps) {
  return (
    <div data-testid="displayscreen">
      <p>{input}</p>
      <h2>{result}</h2>
    </div>
  );
}
