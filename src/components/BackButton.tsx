
type BackButtonProps = {
  onBackspace: () => void;
};

export default function BackButton({ onBackspace }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onBackspace}
      className="mt-3 flex h-14 w-full items-center justify-center rounded-xl bg-amber-600 text-lg font-semibold text-white transition hover:bg-amber-500 active:scale-95"
    >
      BackSpace
    </button>
  );
}
