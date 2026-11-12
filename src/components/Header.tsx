
type HeaderProps = {
  pageTitle: string;
};

export default function Header({ pageTitle }: HeaderProps) {
  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  );
}
