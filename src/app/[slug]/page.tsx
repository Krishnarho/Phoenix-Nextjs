import { notFound } from "next/navigation";
import { routeMap, routeConfig } from "./routes";

export async function generateStaticParams() {
    return routeConfig
        .filter((r) => r.slug && r.slug !== "#" && r.slug !== "") // filter out dynamic / invalid slugs
        .map((r) => ({ slug: r.slug }));
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
    // async await for server and use hook for client component.

    const { slug } = await params;
    const Component = routeMap[slug];

    if (!Component) return notFound();

    return <Component />;
}
