import AboutPage from "./(pages)/AboutPage";
import ProductPage from "./(pages)/products/ProductPage";
import ContactPage from "./(pages)/ContactPage";

export const routeMap: Record<string, React.ComponentType> = {
    "about-phoenix-global": AboutPage,
    "our-products": ProductPage,
    "contact-our-team": ContactPage,
};
