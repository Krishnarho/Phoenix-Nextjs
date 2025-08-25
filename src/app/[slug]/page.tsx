import { notFound } from "next/navigation";
import { routeMap } from "./routes";

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
    // async await for server and use hook for client component.

    const { slug } = await params;
    const Component = routeMap[slug];

    if (!Component) return notFound();

    return <Component />;
}
