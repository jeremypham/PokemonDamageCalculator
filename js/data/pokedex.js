var POKEDEX = {
    "Charizard": {
		"name": "Charizard",
        "t1": "Fire",
        "t2": "Flying",
        "bs": {
            "hp": 78,
            "at": 84,
            "df": 78,
            "sa": 109,
            "sd": 85,
            "sp": 100
        }
    },
    "Blastoise": {
		"name": "Blastoise",
		"t1": "Water",
		"bs": {
			"hp": 79,
			"at": 83,
			"df": 100,
			"sa": 85,
			"sd": 105,
			"sp": 78,
		}
    },
    "Venusaur": {
		"name": "Venusaur",
		"t1": "Grass",
		"t2": "Poison",
		"bs": {
			"hp": 80,
			"at": 82,
			"df": 83,
			"sa": 100,
			"sd": 100,
			"sp": 80,
			"sl": 100
		}
    }
}

const Pokemon = Object.keys(POKEDEX)