type PageIntroProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="container-page animate-fade-up pb-10 pt-14 md:pb-14 md:pt-20">
      {eyebrow ? (
        <div className="mb-5 flex items-center gap-3">
          <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
          <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h1 className="max-w-[680px] text-[2.25rem] font-bold leading-tight text-ink md:text-[3rem]">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-ink/58">{text}</p>
    </section>
  );
}
