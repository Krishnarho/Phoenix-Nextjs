export type Slides = {
    id: number;
    title: string;
    para: string;
    image: string;
    link: string;
};

export const slides = [
    {
        id: 1,
        title: "Generations",
        para: "Powering the world begins with electricity generation—from renewable sources to traditional plants—",
        image: "/images/generation.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Transmissions",
        para: "Converted into energy that travels vast distances through high-voltage transmission lines...",
        image: "/images/transmission.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Distributions",
        para: "Once near homes and businesses, it's carefully distributed through local networks to fuel everything from daily life to critical infrastructure. Reliable. Efficient. Essential.",
        image: "/images/distribution.jpg",
        link: "#",
    },
];
