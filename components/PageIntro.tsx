type PageIntroProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="container-page py-12 md:py-20">
      {eyebrow ? (
        <p className="mb-4 text-sm font-bold text-olive">{eyebrow}</p>
      ) : null}
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/68">{text}</p>
    </section>
  );
}
