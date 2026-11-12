
type BackButtonProps = {
  onBackspace: () => void;
};

export default function BackButton({ onBackspace }: BackButtonProps) {
  return (
    <button type="button" onClick={onBackspace}>
      BackSpace
    </button>
  );
}
