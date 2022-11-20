class perso {
    constructor(name, mentalH) {
        this.name = name;
        this.mentalH = mentalH;
    }
}
let playlist = ['Anissa-Wejdene', 'Cascade-Alpha Wann', 'Feat-Kikesa', 'Creep-Radiohead','MountEverest-Labirinth' ]
const randomSong = playlist[Math.floor(Math.random() * playlist.length)];
let john = new perso('John', 10);
let changeTax = 0;

for (let i = 30; i > 0; i--) {
    
    const randomSong = playlist[Math.floor(Math.random() * playlist.length)];
    if (randomSong === 'Anissa-Wejdene') {
        john.mentalH -= 1
        changeTax ++
    }
    if (john.mentalH <= 0){
        console.log('EXPLOSIOOOOOOOOON au feu n°' + i)
        break
    }
    console.log('il reste ' + i + ' feux')
    console.log('La radio joue ' + randomSong)
    console.log('La santé mentale de john vaut ' + john.mentalH)

    console.log(' ')

}

if (john.mentalH > 0) {
    console.log(john.name + ' est bien rentré et il a changé ' + changeTax + ' fois de taxi')

}