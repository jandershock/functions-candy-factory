//Buy chocolate
const buyChocolate = () => {
    const choc = {
        type: 'Milk chocolate'
    }
    return choc;
}

//Add mint flavoring
const addFlavoring = (obj) => {
    obj.flavor = 'Mint';
}

//Combine chocolate and mint
const makeBarkMixture = (obj) => {
    if (obj.flavor === 'Mint'){
        obj.mixed = true;
    } else {
        obj.mixed = false;
    }
}

//Bake the mixture
const bakeCandy = (obj) => {
    if (obj.mixed === true){
        obj.baked = true;
    } else {
        obj.baked = false;
    }
}

//Break the sheet in six pieces
const breakBark = (obj) => {
    if (obj.baked) {
        return Array(6).fill('Mint Chocolate Bark Piece');
    } else {
        return [];
    }
}

//Enjoy?


let x = buyChocolate();
addFlavoring(x);
makeBarkMixture(x);
bakeCandy(x);
console.log(x);

let bPieces = breakBark(x);
console.log(bPieces);