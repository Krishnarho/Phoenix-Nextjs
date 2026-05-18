type NestedSubMenu = { nav: string; path: string };

type SubMenu = {
    nav: string;
    path: string;
    imageUrl?: string;
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
    {
        id: "products",
        nav: "Products",
        path: "#",
        subMenu: [
            { nav: "Cable Accessories", path: "#", imageUrl: "/images/products/raychem-kits.jpg" },
            { nav: "Protection", path: "#", imageUrl: "/images/products/raychem-arresters.jpg" },
            { nav: "Safety", path: "#", imageUrl: "/images/products/raychem-gloves.jpg" },
            { nav: "Conductors ", path: "#", imageUrl: "/images/products/galaxy-conductors.jpg" },
        ],
    },
    {
        id: "ia",
        nav: "Industries & Applications",
        path: "#",
        subMenu: [
            { nav: "Energy", path: "#", imageUrl: "/images/products/energy.jpg" },
            { nav: "Oil & Gas", path: "#", imageUrl: "/images/products/oil-gas.jpg" },
            { nav: "Industry", path: "#", imageUrl: "/images/products/industry.jpg" },
        ],
    },
    { id: "contact", nav: "Contact", path: "/contact-our-team" },
];
