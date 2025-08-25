import { routeConfig } from "@/app/[slug]/routes";

export type NavLink = {
    name: string;
    path: string;
};

// export const navLinks: NavLink[] = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "#" },
//     { name: "Contact", path: "#" },
// ];

export const navLinks: NavLink[] = routeConfig
    .filter((route) => route.nav)
    .map((route) => ({
        name: route.name,
        path: `/${route.slug}`,
    }));
