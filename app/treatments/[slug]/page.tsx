import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/ContactPanel";
import { JsonLd } from "@/components/JsonLd";
import { treatments, site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const treatmentImages: Record<string, string> = {
  "skin-tags": "/assets/skin_tags.jpg",
  "anti-aging-gradual": "/assets/anti_aging.jpg",
  "facial-classic": "/assets/facial_classic.jpg",
  "facial-advanced": "/assets/facial_advanced.jpg"
};

const treatmentVideos: Record<string, string> = {
  "facial-advanced": "/assets/face_lab.mp4",
  "skin-tags": "/assets/plasma.mp4"
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.filter((t) => t.fullText).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug && t.fullText);
  if (!treatment) return {};

  return buildMetadata({
    title: treatment.title,
    description: treatment.short,
    path: `/treatments/${slug}`,
    image: treatmentImages[slug] ?? site.image,
    imageAlt: treatment.title
  });
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug && t.fullText);
  if (!treatment) notFound();

  const paragraphs = treatment.fullText!.split(/\n\n+/);
  const image = treatmentImages[slug];
  const video = treatmentVideos[slug];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(treatment),
          breadcrumbSchema([
            { name: "בית", url: site.url },
            { name: "טיפולים", url: `${site.url}/treatments` },
            { name: treatment.title, url: `${site.url}/treatments/${slug}` }
          ])
        ]}
      />
      <article className="container-page py-12 lg:py-20">
        <nav aria-label="ניווט עמודים" className="mb-10 text-sm text-ink/45">
          <Link className="focus-ring hover:text-ink" href="/treatments">
            טיפולים
          </Link>
          <span className="mx-2">›</span>
          <span className="text-ink/70">{treatment.title}</span>
        </nav>

        <div className="mx-auto max-w-2xl">
          {image && (
            <div className="mb-12 overflow-hidden rounded-3xl bg-linen shadow-soft">
              <Image
                alt={treatment.title}
                className="w-full object-cover"
                height={520}
                priority
                src={image}
                width={800}
              />
            </div>
          )}

          <div className="mb-6 h-px w-10 bg-clay/60" />
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            {treatment.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/60">{treatment.short}</p>

          <div className="mt-12 grid gap-7">
            {paragraphs.map((para, i) => (
              <p
                className="whitespace-pre-line text-[17px] leading-[2] text-ink/72"
                key={i}
              >
                {para.trim()}
              </p>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-2">
            {treatment.keywords.map((kw) => (
              <span
                className="rounded-full bg-ivory px-3 py-1.5 text-[11px] font-semibold text-ink/50"
                key={kw}
              >
                {kw}
              </span>
            ))}
          </div>

          {video && (
            <div className="mt-16">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-clay/70">
                  צפי בפעולה
                </p>
              </div>
              <video
                className="w-full overflow-hidden rounded-3xl shadow-soft"
                controls
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="mt-12 border-t border-ink/10 pt-8">
            <Link
              className="focus-ring inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-clay transition duration-200 hover:text-ink"
              href="/treatments"
            >
              ← כל הטיפולים
            </Link>
          </div>
        </div>
      </article>

      <ContactPanel />
    </>
  );
}
