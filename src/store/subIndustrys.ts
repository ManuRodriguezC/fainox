interface SubIndustry {
    [key: string]: DatesIndustrys[];
}

export interface DatesIndustrys {
    name: string,
    image: string,
}

export const subIndustrys: SubIndustry = {
    "Lactea y de Derivados": [
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
    "Frutas, Pulpa y Jugos": [
        {
            "name": "equipos para pulpas",
            "image": "/industrys/pulpas.webp",
        },
        {
            "name": "equipos para jugos y bebidas",
            "image": "/industrys/jugos.webp"
        }
    ],
    "Conservas, Salsas y Aderezos": [
        {
            "name": "equipos para conservas",
            "image": "/industrys/conservas.webp",
        },
        {
            "name": "equipos para salsas y aderezos",
            "image": "/industrys/aderesos.webp",
        }
    ],
    "Alimentos Varios": [
        {
            "name": "aceites y margarinas",
            "image": "/industrys/aceite.webp",
        },
        {
            "name": "harinas y cereales",
            "image": "/industrys/cereales.webp",
        },
        {
            "name": "cárnicos y embutidos",
            "image": "/industrys/carnes.webp"
        }]
}