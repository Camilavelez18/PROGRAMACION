class Persona {
    private name: string
    private peso: number 
    private estatura: number

    constructor(name, peso, estatura){this.name = name
        this.peso = peso 
        this.estatura = estatura}
    
}

const PersonaJuan = new Persona(`juan`, 70, 180)
console.log(PersonaJuan)