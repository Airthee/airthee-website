interface Skill {
    name: string;
    description: string[];
}

export const skills: Skill[] = [
    {
        name: 'Polyvalence',
        description: [
            "De la conception jusqu’au déploiement, en passant par la base de données, le développement front et back, j’aime travailler sur toutes les couches de l’application.",
            "Je m’adapte à tout framework / langage."
        ]
    },
    {
        name: 'Qualité',
        description: [
            "Adepte des bonnes pratiques de développement, la qualité et la robustesse de mes développements sont ma priorité.",
            "L’expérence utilisateur est également une priorité, c’est pourquoi je me met à sa place lors de mes développement afin de lui proposer l’expérience la plus optimale.",
        ]
    },
    {
        name: 'Force de proposition',
        description: [
            "Fort de mes différentes expériences, je n’hésite pas à proposer des améliorations si nécessaire.",
            "Ces améliorations peuvent notamment représenter un gain en productivité, en coûts d’infrastructure ou encore en expérience utilisateur.",
        ]
    }
]