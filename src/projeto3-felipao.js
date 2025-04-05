class heroi{
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi){
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoDoHeroi = tipoDoHeroi
    }
    atacar(){
        let ataque = " "

        if (this.tipoDoHeroi === "Mago") {
            ataque = "magia"
        } else if (this.tipoDoHeroi === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipoDoHeroi === "Monge") {
            ataque = "artes marciais"
        } else if (this.tipoDoHeroi === "Ninja") {
            ataque = "shuriken"
        } else {
            ataque = "ataque desconhecido"
        }
        console.log(`o ${this.tipoDoHeroi} atacou usando ${ataque}`)
    }
}

let heroi1 = new heroi("Barley", 22, "Mago")
let heroi2 = new heroi("Raidon", 26, "Guerreiro")
let heroi3 = new heroi("Serp", 45, "Monge")
let heroi4 = new heroi("Rei", 32, "Ninja")

heroi1.atacar()
heroi2.atacar() 
heroi3.atacar()
heroi4.atacar()