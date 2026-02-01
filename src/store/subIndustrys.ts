interface SubIndustry {
    [key: string]: DatesIndustrys[];
}

export interface DatesIndustrys {
    name: string,
    image: string,
}

export const subIndustrys: SubIndustry = {
    "Lacteos y Derivados": [
        {
            "name": "equipos para leche",
            "image": "/industrys/leche.webp",
        },
        {
            "name": "equipos para yogurt",
            "image": "/industrys/yogurt.webp"
        },
        {
            "name": "equipos para quesos",
            "image": "/industrys/quesos.webp"
        },
        {
            "name": "lineas de mantequilla",
            "image": "/industrys/mantequilla.webp"
        },
        {
            "name": "derivados varios",
            "image": "/industrys/derivados.webp"
        }
    ],
    "Frutas, Pulpas y Bebidas": [
        {
            "name": "equipos para frutas y pulpas",
            "image": "/industrys/pulpas.webp",
        },
        {
            "name": "equipos para jugos y bebidas",
            "image": "/industrys/jugos.webp"
        }
    ],
    "Conservas, Salsas y Aderezos": [
        {
            "name": "equipos para conservas, salsas y aderezos",
            "image": "/industrys/aderesos.webp",
        },
        // {
        //     "name": "equipos para salsas y aderezos",
        //     "image": "/industrys/aderesos.webp",
        // }
    ],
    "Alimentos Varios": [
        {
            "name": "Aceites y Margarinas",
            "image": "/industrys/aceite.webp",
        },
        {
            "name": "harinas y cereales",
            "image": "/industrys/WhatsApp Image 2025-01-18 at 11.24.17 AM.jpeg",
        },
        {
            "name": "cárnicos y embutidos",
            "image": "/industrys/WhatsApp Image 2025-01-18 at 11.31.16 AM.jpeg"
        }],
    "Industria Farmaceutica y Afines": [
        {
            "name": "equipos para la industria farmacéutica",
            "image": "/industrys/farmaceutica.jpg",}
    ]
}