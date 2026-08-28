const RULE_TYPES = ["🟢","⚫️","🔴","🟡🔵"];

const RULE_POOL = {
    en:{
        "⚫️":[
            "Earn 11 reputation stars for each completed island",
            "Earn 5 reputation stars for each island with 4 different terrain types (forest, village, farm, water)",
            "Earn 4 reputation stars for each 2x2 block of spaces, on the same island, with 4 different terrain types (mountain, monster, hero, and Zeus lightning spaces included)"
        ],
        "🔴":[
            "Earn 1 reputation star for each cluster of village spaces",
            "Earn 7 reputation stars for each cluster of 4 or more village spaces completely surrounded by the island's edge or by filled spaces",
            "Earn 3 reputation stars for each village space in your 3rd largest cluster of village spaces"
        ],
        "🟡🔵":[
            "Earn 1 reputation star for each farm space not adjacent to the island's edge. Earn 1 reputation star for each edge that separates two waters",
            "Earn 5 reputation stars for each island with an equal number of farm and water spaces (at least 1 of each)",
            "Earn 2 reputation stars for each edge shared by a farm space and a water space"
        ],
        "🟢":[
            "Earn 3 reputation stars for each row in which every island present has a forest space in that row",
            "Earn 4 reputation stars for each island whose number of forest spaces is unique among all islands on the map",
            "Select two islands that are not adjacent to each other. Earn 1 reputation star for each forest space on those two islands"
        ]
    },
    fr:{
        "⚫️":[
            "Gagnez 11 étoiles de réputation par île complétée",
            "Gagnez 5 étoiles de réputation par île avec 4 types de terrain différents (forêt, village, champs, eau)",
            "Gagnez 4 étoiles de réputation par bloc de 2x2 cases, sur la même île, avec 4 types de terrain différents (montagne, monstre, héros et foudre de Zeus inclus)"
        ],
        "🔴":[
            "Gagnez 1 étoile de réputation par groupe de cases village",
            "Gagnez 7 étoiles de réputation par groupe de 4 cases village ou plus entièrement entouré par le bord de l'île ou par des cases remplies",
            "Gagnez 3 étoiles de réputation par case village de votre 3e plus grand groupe de cases village"
        ],
        "🟡🔵":[
            "Gagnez 1 étoile de réputation par case champs non adjacente au bord de l'île. Gagnez 1 étoile de réputation par bord séparant deux cases eau",
            "Gagnez 5 étoiles de réputation par île comptant un nombre égal de cases champs et de cases eau (au moins 1 de chaque)",
            "Gagnez 2 étoiles de réputation par bord partagé entre une case champs et une case eau"
        ],
        "🟢":[
            "Gagnez 3 étoiles de réputation par ligne où chaque île présente possède une case forêt sur cette ligne",
            "Gagnez 4 étoiles de réputation par île dont le nombre de cases forêt est unique parmi toutes les îles de la carte",
            "Choisissez deux îles qui ne sont pas adjacentes l'une à l'autre. Gagnez 1 étoile de réputation par case forêt sur ces deux îles"
        ]
    }
};
