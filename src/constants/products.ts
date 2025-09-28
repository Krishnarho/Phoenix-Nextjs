export type RaychemProduct = {
    id: string; // Unique identifier or SKU
    name: string; // Product name
    category: string; // Main category (e.g., "Reliable Connections / Connectors")
    type?: string; // Optional sub-type (e.g., "Two‑Hole Lug")
    material?: string; // Material (e.g., "Copper", "Aluminium")
    finish?: string; // Optional finish (e.g., "Tin plated")

    features: string[]; // Key features (bullets)
    applications?: string[]; // Typical use cases
    keywordTags: string[]; // Keywords for filtering, search, SEO

    specs?: SpecItem[]; // Array of structured specs
};

// 👇 SpecItem for technical details
export type SpecItem = {
    key: SpecKey;
    label: string; // Human-friendly label (e.g., "Rated Voltage")
    value: string | number; // Actual value (e.g., 33 or "Up to 72 kV")
};

// 👇 Optional: enum to restrict valid keys (can be extended easily)
export type SpecKey =
    | "voltageRating_kV"
    | "range_mm2"
    | "range_AWG_mm2"
    | "standard"
    | "nominalCrossSection_mm2"
    | "barrelID_mm"
    | "barrelOD_mm"
    | "length_mm"
    | "height_mm";

export const products: RaychemProduct[] = [
    {
        id: "RLHV‑2E",
        name: "RLHV‑2E Two‑Hole Lugs ‑ Heavy Duty Copper",
        category: "Connectors / Copper Lugs",
        type: "Two‑Hole Lug",
        material: "Copper",
        features: ["Heavy duty two‑hole design to avoid rotation", "High voltage capability"],
        keywordTags: ["connectors", "heavy duty", "reliable connections"],
        // demo
        specs: [
            { key: "voltageRating_kV", label: "Voltage Rating (kV)", value: 33 },
            { key: "range_mm2", label: "Conductor Range (mm²)", value: "25–630 mm²" },
            { key: "barrelID_mm", label: "Barrel ID (mm)", value: 14.5 },
            { key: "length_mm", label: "Length (mm)", value: 103 },
        ],
    },
    {
        id: "T‑Connector‑RTC120",
        name: "T‑Connector RTC120 (Copper)",
        category: "Reliable Connections / Connectors",
        type: "T‑Connector",
        material: "Electro‑tin plated copper",
        features: ["Twin connection with one input", "Internal chamfer for easier cable entry"],
        keywordTags: ["connectors", "reliable connections"],
    },
    {
        id: "T‑Connector‑RTC240",
        name: "T‑Connector RTC240 (Copper)",
        category: "Reliable Connections / Connectors",
        type: "T‑Connector",
        material: "Electro‑tin plated copper",
        features: ["Twin‑input connection", "Good current carrying capability"],
        keywordTags: ["connectors", "reliable connections"],
    },
    {
        id: "T‑Connector‑RTC300",
        name: "T‑Connector RTC300 (Copper)",
        category: "Reliable Connections / Connectors",
        type: "T‑Connector",
        material: "Electro‑tin plated copper",
        features: ["Twin connection with one input", "High current capacity"],
        keywordTags: ["connectors", "reliable connections"],
    },
    {
        id: "T‑Connector‑RTC400",
        name: "T‑Connector RTC400 (Copper)",
        category: "Reliable Connections / Connectors",
        type: "T‑Connector",
        material: "Electro‑tin plated copper",
        features: ["Twin connection with one input", "Heavy duty / larger conductors"],
        keywordTags: ["connectors", "reliable connections"],
    },
    {
        id: "AFDS",
        name: "AFDS Two‑Way Splice Connectors ‑ Aluminium Dual Rated",
        category: "Connectors / Aluminium Lugs",
        type: "Two‑Way Splice Connector",
        material: "Aluminium (dual rated for Al & Cu conductors)",
        features: ["Standard barrel with crimps for reliable connection", "Works with aluminium and copper conductors"],
        keywordTags: ["connectors", "dual rated", "reliable connections"],
    },
    {
        id: "RCS",
        name: "RCS Two‑Way Splice Connectors Short Barrel",
        category: "Connectors / Copper Splices",
        type: "Two‑Way Splice Connector",
        material: "Copper",
        features: ["Short barrel", "Standard barrel with crimps", "Reliable copper splice connections"],
        keywordTags: ["connectors", "splice", "reliable connections"],
    },
    {
        id: "RLHV",
        name: "RLHV One‑Hole Lugs ‑ Heavy Duty Copper",
        category: "Connectors / Copper Lugs",
        type: "One‑Hole Lug",
        material: "Copper",
        features: ["Heavy duty lug", "Designed for high voltage application up to 33 kV"],
        keywordTags: ["connectors", "heavy duty", "reliable connections"],
    },
    {
        id: "RLT‑4E",
        name: "RLT 4E Four‑Hole Transformer Lugs",
        category: "Connectors / Copper Lugs",
        type: "Four‑Hole Lug",
        material: "High conductivity copper",
        features: [
            "Designed for transformer applications",
            "Four‑hole for secure bolting",
            "Heavy duty current handling",
        ],
        keywordTags: ["connectors", "transformer", "reliable connections", "asset protection"],
    },
    {
        id: "RLDS",
        name: "RLDS One‑Hole Lugs ‑ Copper Lugs as per DIN 46235",
        category: "Connectors / Copper Lugs",
        type: "One‑Hole Lug",
        material: "Copper",
        features: ["Meets DIN standard 46235", "Reliable copper termination"],
        keywordTags: ["connectors", "standardized", "reliable connections"],
    },
    {
        id: "RLBM",
        name: "RLBM One‑Hole Lugs ‑ Bell Mouth Copper Lugs",
        category: "Connectors / Copper Lugs",
        type: "One‑Hole Lug",
        material: "Copper",
        features: [
            "Bell‑mouth structure for easy insertion of stranded copper cables",
            "Reduces damage / fraying at conductor entry",
        ],
        keywordTags: ["connectors", "ease of installation", "reliable connections"],
    },
    {
        id: "RLLBE‑2E",
        name: "RLLBE Two‑Hole Long Extended Barrel Copper Lug Heavy Duty",
        category: "Connectors / Copper Lugs",
        type: "Two‑Hole Lug",
        material: "Copper",
        features: ["Long extended barrel with extra crimps", "Designed for heavy‑duty loads"],
        keywordTags: ["connectors", "heavy duty", "reliable connections"],
    },
    {
        id: "A2LB",
        name: "A2LB Two‑Hole Lugs Long Barrel Copper Lugs",
        category: "Connectors / Copper Lugs",
        type: "Two‑Hole Lug",
        material: "Copper",
        features: ["Long barrel", "Two holes to avoid rotation or movement"],
        keywordTags: ["connectors", "stability", "reliable connections"],
    },
    {
        id: "HeatShrink‑HV‑Terminations",
        name: "Heat Shrink High Voltage Terminations (up to 72 kV)",
        category: "Reliable Connections / Power Cable Accessories",
        type: "Terminations",
        features: [
            "Heat‑shrinkable stress control sleeves",
            "Non‑tracking outer insulation",
            "Water & corrosion resistant",
            "Designed to suit connectors and mechanical lugs",
        ],
        keywordTags: ["reliable connections", "power cable accessories"],
    },
];
