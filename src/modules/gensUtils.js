export function RNG(min, max){ 
    const rand = Math.floor(Math.random() * (max - min) + min) 
    return rand;
};

export function passwordRNG(size, range){
    if (typeof range !== 'object' || Object.keys(range).length !== 2) throw new TypeError('Second flag needs to be a 2 numbers range array')
    let saida = '';
    for(let i = 0; i < size; i++){
        saida += String.fromCharCode(RNG(range[0], range[1]));
    }
    return saida;
};

