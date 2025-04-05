class heroi:
    def __init__(self, nome_do_heroi, idade_do_heroi, tipo_do_heroi):
        self.nome_do_heroi = nome_do_heroi
        self.idade_do_heroi = idade_do_heroi
        self.tipo_do_heroi = tipo_do_heroi
    
    def atacar(self): 
        ataque = ""

        if self.tipo_do_heroi == "Mago":
            ataque = "magia"
        elif self.tipo_do_heroi == "Guerreiro":
            ataque = "espada"
        elif self.tipo_do_heroi == "Monge":
            ataque = "artes marciais"
        elif self.tipo_do_heroi == "Ninja":
            ataque = "shuriken"
        else:
            ataque = "ataque desconhecido"

        print(f"o {self.tipo_do_heroi} atacou usando {ataque}")



heroi1 = heroi("Barley", 22, "Mago")
heroi2 = heroi("Raidon", 26, "Guerreiro")
heroi3 = heroi("Serp", 45, "Monge")
heroi4 = heroi("Rei", 32, "Ninja")


heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
