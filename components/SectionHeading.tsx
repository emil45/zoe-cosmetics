type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-olive">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-ink/66">{text}</p> : null}
    </div>
  );
}
