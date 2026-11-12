
type DisplayProps = {
  input: string;
  result: string;
};

export default function Display({ input, result }: DisplayProps) {
  return (
    <div
      data-testid="displayscreen"
      className="mb-6 rounded-2xl border border-slate-700 bg-slate-800 p-5 text-right"
    >
      <h3 className="min-h-6 break-all text-sm text-slate-400">
        {input || result}
      </h3>

      <h2 className="min-h-12 break-all text-4xl font-semibold text-white">
        {result}
      </h2>
    </div>
  );
}
