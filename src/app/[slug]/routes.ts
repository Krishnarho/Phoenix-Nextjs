import HomePage from "../(pages)/home/page";
import AboutPage from "../(pages)/about-phoenix-global/page";
import ProductPage from "../(pages)/products/page";
import ContactPage from "../(pages)/contact-our-team/page";

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
    { name: "Products", slug: "#", nav: true, component: ProductPage },
    { name: "Contact", slug: "#", nav: true, component: ContactPage },
];

export const routeMap: Record<string, React.ComponentType> = Object.fromEntries(
    // Transforming slug and component as key-value pair
    routeConfig.map((route) => [route.slug, route.component])
);
