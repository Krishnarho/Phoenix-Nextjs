// Define the Product type
type Product = {
    id: number;
    name: string;
    category: string;
    brand: string;
    description: string;
    imageUrl: string;
    features: string[];
    specifications: string[];
    certifications: string[];
    downloads: {
        brochure: string;
    };
};

// Example product object
const products: Product[] = [
    {
        id: 1,
        name: "Medium Voltage Switchgear Terminations",
        category: "Cable Accesories",
        brand: "Raychem RPG",
        description:
            "Medium Voltage screened separable connectors for switchgears. Raychem developed screened separable connectors for switchgears which are compact and space saving, having high degree of reliability and safety. These terminations are designed, developed, and tested upto 36 kV for almost all sizes of cables. Switchgear terminations are either OUTER CONE type (suitable for bushings as per EN 50181 for Type A (250 Amps), B (400 Amps), C (630/800 & 1250 Amps)) or INNER CONE type Size 2 (800 Amps) and Size 3 (1250 Amps). Screened separable connectors conform to IEEE bushings and terminations to CENELEC HD 629.1 and IS 13573-2 standards.",
        imageUrl: "/images/products/cable-accessories/Medium-Voltage-Switchgear-Terminations.png",
        features: [
            "Outer Cone - Angled prefabricated shielded adapter made of silicone rubber or EPDM",
            "Integrated stress control system",
            "Test point for capacitive voltage measurement",
            "Mechanical lugs included",
            "Inner Cone - Shielded inline connection for gas insulated switchgears up to 36 kV",
            "Plug-in termination suitable for outdoor use",
            "Voltage detector facility available upon request",
            "Wedge Connector included",
        ],
        specifications: [
            "Pre-engineered kit",
            "Suitable for crimp and mechanical type connectors",
            "Available in LSR and EPDM",
            "Tested as per National and International Standards",
        ],
        certifications: ["CPRI", "KEMA"],
        downloads: {
            brochure:
                "https://vistahub.in/pce/wp-content/uploads/2026/03/product-catalog-reliable-connections-power-cable-accessories-.pdf",
        },
    },
];
