#pokemon.py
#this contains the class for pokemon and their basic information

class pokemon(object):
    def __init__(self, name, type1, type2, hp, atk, defense, spatk, spdef, spd):
        self.name = name
        self.type1 = type1
        self.type2 = type2
        self.hp = hp
        self.atk = atk
        self.defense = defense
        self.spatk = spatk
        self.spdef = spdef
        self.spd = spd

Bulbasaur = pokemon('Bulbasaur','Grass','Poison',45,49,49,65,65,45)

print Bulbasaur.hp

return pokemon