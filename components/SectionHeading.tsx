type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, text, centered }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
          <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="text-[1.75rem] font-bold leading-tight text-ink md:text-[2.25rem]">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-[1.85] text-ink/60">{text}</p>
      ) : null}
    </div>
  );
}
