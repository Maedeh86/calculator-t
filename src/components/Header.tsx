

type HeaderProps = {
  pageTitle: string;
};

export default function Header({ pageTitle }: HeaderProps) {
  return (
    <header className="mb-6 text-center">
      <h1 className="text-2xl font-bold tracking-wide text-white">
        {pageTitle}
      </h1>
    </header>
  );
}
