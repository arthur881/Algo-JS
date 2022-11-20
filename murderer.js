class killer {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}
class feat {
    constructor(name, die, dmg, dieDmg) {
        this.name = name;
        this.die = die;
        this.dmg = dmg;
        this.dieDmg = dieDmg;
    }
}

let jason = new killer('Jason', 100)

var names =['nerd', 'bg', 'bimbo', 'stoner', 'sportif']
var character = []


for (let i = 0; i < 5; i++){
    let x = Math.random()*0.5
    let y = Math.random()*0.5
    let z = 1 - (x + y)
    let newChar = new feat(names[Math.floor(Math.random() * names.length)], x, y, z);
    character.push(newChar)
}


while (jason.hp >= 0) {

    pickedChar = character[Math.floor(Math.random() * character.length)]
    pickedCharPlace = character.indexOf(pickedChar)
    maxvalue = Math.max(pickedChar['die'], pickedChar['dmg'], pickedChar['dieDmg'])

    if (pickedChar['die'] === maxvalue){

        character.splice(pickedCharPlace, 1)
        console.log('Jason killed ' + pickedChar['name']);
        console.log(' ')
    
    } else if (pickedChar['dmg'] === maxvalue) {
    
        jason.hp -= 10
        console.log(pickedChar['name'] + ' as dodge and damage 10hp to Jason health\'s');
        console.log(' ')
    
    } else {
    
        jason.hp -= 15
        character.splice(pickedCharPlace, 1)
        console.log('Jason killed ' + pickedChar['name'] + ' but damage 15hp to Jason health\'s');
        console.log(' ')
    
    }
    if (character.length == 0){
        break
    }
}

if (jason.hp <= 0) {
    console.log('Jason is dead, survirors wins')
}
else {
    console.log('Jason wins, he had ' + jason.hp + ' hp left.')
}

