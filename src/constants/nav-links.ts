type SubSubNav = { nav: string; path: string };

type SubNav = {
    nav: string;
    path: string;
    subSubNav?: SubSubNav[];
};

export type NavLink = {
    id: string;
    nav: string;
    path: string;
    subNav?: SubNav[];
};

export const navLinks: NavLink[] = [
    //{ id: "home", nav: "Home", path: "/" },
    {
        id: "home",
        nav: "Company",
        path: "/",
        subNav: [
            { nav: "Home Page", path: "/" },
            {
                nav: "About Us",
                path: "/about-phoenix-global#about",
                subSubNav: [
                    { nav: "About Company", path: "/about-phoenix-global#introduction" },
                    { nav: "Our Vision", path: "/about-phoenix-global#vision" },
                    { nav: "Our Mission", path: "/about-phoenix-global#mission" },
                    { nav: "Our Capabilities", path: "/about-phoenix-global#capabilities" },
                    { nav: "Our Clients", path: "/about-phoenix-global#clients" },
                ],
            },
        ],
    },
    { id: "products", nav: "Products", path: "#" },
    {
        id: "i&a",
        nav: "Industries & Applications",
        path: "#",
        subNav: [
            { nav: "Energy", path: "#" },
            { nav: "Oil & Gas", path: "#" },
            { nav: "Industry", path: "#" },
        ],
    },
    { id: "contact", nav: "Contact", path: "/contact-our-team" },
];
