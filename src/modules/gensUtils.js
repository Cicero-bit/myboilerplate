const fs = require('fs').promises;
const path = require('path');

async function getFiles(rootdir){
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir)
    return files;
}

getFiles('src')
    .then((v) => console.log(v))


function RNG(min, max){ 
    const rand = Math.floor(Math.random() * (max - min) + min) 
    return rand;
};

function passwordRNG(size, range){
    if (typeof range !== 'object' || Object.keys(range).length !== 2) throw new TypeError('Second flag needs to be a 2 numbers range array')
    let saida = '';
    for(let i = 0; i < size; i++){
        saida += String.fromCharCode(RNG(range[0], range[1]));
    }
    return saida;
};

exports.passwordRNG = passwordRNG;
exports.RNG = RNG;

