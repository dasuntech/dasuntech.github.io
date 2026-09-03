import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage, getPageTitle } from "@/components/detail-page";
import { SiteShell } from "@/components/site-shell";
import { allStaticRoutes } from "@/lib/site-data";

type RouteProps = {
  params: Promise<{ section: string; slug: string }>;
};

export function generateStaticParams() {
  return allStaticRoutes;
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { section, slug } = await params;
  const title = getPageTitle(section, slug);
  if (!title) return {};

  return {
    title: `${title} | 다선테크`,
    description: `다선테크 ${title} 페이지입니다.`,
  };
}

export default async function Page({ params }: RouteProps) {
  const { section, slug } = await params;
  const title = getPageTitle(section, slug);
  if (!title) notFound();

  return (
    <SiteShell>
      <DetailPage section={section} slug={slug} />
    </SiteShell>
  );
}
