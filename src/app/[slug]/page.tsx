import { notFound } from "next/navigation";
import { routeMap } from "./routes";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function SlugPage({ params }: PageProps) {
    const { slug } = await params;
    const Component = routeMap[slug];

    if (!Component) return notFound();

    return <Component />;
}
