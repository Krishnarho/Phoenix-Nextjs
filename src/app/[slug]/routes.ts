import HomePage from "./(pages)/home/page";
import AboutPage from "./(pages)/AboutPage";
import ProductPage from "./(pages)/products/page";
import ContactPage from "./(pages)/ContactPage";

// export const routeMap: Record<string, React.ComponentType> = {
//     "about-phoenix-global": AboutPage,
//     "our-products": ProductPage,
//     "contact-our-team": ContactPage,
// };

type RouteConfig = {
    name: string;
    slug: string;
    nav: boolean;
    component: React.ComponentType;
};

export const routeConfig: RouteConfig[] = [
    { name: "Home", slug: "", nav: true, component: HomePage },
    { name: "About", slug: "about-phoenix-global", nav: false, component: AboutPage },
    { name: "Products", slug: "our-products", nav: true, component: ProductPage },
    { name: "Contact", slug: "contact-our-team", nav: true, component: ContactPage },
];

export const routeMap: Record<string, React.ComponentType> = Object.fromEntries(
    // Transforming slug and component as key-value pair
    routeConfig.map((route) => [route.slug, route.component])
);
