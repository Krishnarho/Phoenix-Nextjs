export type NavLink = {
    name: string;
    path: string;
};

export const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
];
