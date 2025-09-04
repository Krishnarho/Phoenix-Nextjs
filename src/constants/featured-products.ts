export type FeaturedProductsTypes = {
    id: number;
    title: string;
    para: string;
    link: string;
    image: string;
    category: string;
};

export const featuredProducts: FeaturedProductsTypes[] = [
    {
        id: 1,
        title: "Jointing & Termination Kits",
        para: "We hav a complete system of heat shrink & cold applied cable jointing and terminations kits up to 245 kV.",
        link: "#",
        image: "/images/products/raychem-kits.jpg",
        category: "power cable accessories",
    },
    {
        id: 2,
        title: "Insulating Rubber Gloves",
        para: "Provides electrical protection from 500V AC to 36000V AC working voltage.",
        link: "#",
        image: "/images/products/raychem-gloves.jpg",
        category: "asset protection",
    },
    {
        id: 3,
        title: "Lightning / Surge Arresters",
        para: "Polymeric surge arrester upto 400kv. Surge arresters pass rigorous tests as per IEC 60099-4 Standard.",
        link: "#",
        image: "/images/products/raychem-arresters.jpg",
        category: "asset protection",
    },
    {
        id: 4,
        title: "Conductors",
        para: "Aluminium conductor with steel reinforced & aluminium conductor alloy reinforced for power transmission and distribution.",
        link: "#",
        image: "/images/products/galaxy-conductors.jpg",
        category: "conductors",
    },
];
