type PageShellProps = {
  title: string;
  description: string;
};

export default function PageShell({ title, description }: PageShellProps) {
  return (
    <section className="container-max px-gutter py-xl">
      <h1 className="font-display text-3xl text-primary-dark-brown">{title}</h1>
      <p className="mt-4 max-w-2xl font-body text-primary-terracotta">{description}</p>
    </section>
  );
}
