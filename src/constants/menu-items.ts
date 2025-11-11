type NestedSubMenu = { nav: string; path: string };

type SubMenu = {
    nav: string;
    path: string;
    nestedSubMenu?: NestedSubMenu[];
};

export type MenuItem = {
    id: string;
    nav: string;
    path: string;
    subMenu?: SubMenu[];
};

export const menuItems: MenuItem[] = [
    //{ id: "home", nav: "Home", path: "/" },
    {
        id: "home",
        nav: "Company",
        path: "/",
        subMenu: [
            { nav: "Home Page", path: "/" },
            {
                nav: "About Us",
                path: "/about-phoenix-global#about",
                nestedSubMenu: [
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
        id: "ia",
        nav: "Industries & Applications",
        path: "#",
        subMenu: [
            { nav: "Energy", path: "#" },
            { nav: "Oil & Gas", path: "#" },
            { nav: "Industry", path: "#" },
        ],
    },
    { id: "contact", nav: "Contact", path: "/contact-our-team" },
];
