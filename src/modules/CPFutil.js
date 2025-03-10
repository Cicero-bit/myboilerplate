//validates the brazilian CPF
function validate(cpf){
    const _cpf = Array.from(cpf.replace(/\D+/g, ''))
    if(typeof cpf === 'undefined' || _cpf.length !== 11 || _cpf.every((v, i, a) => {return v === a[0]}) || typeof cpf !== 'string') return false;
    function calculateVerifierDigit(numarray){ 
        let sum = 0;
        for(let i = 0; i < numarray.length; i++){
            sum += Number(numarray[i]) * (numarray.length + 1 - i);
        };
        return (11 - (sum % 11) > 9) ? 0 : 11 - (sum % 11) 
    };

    return (calculateVerifierDigit(_cpf.slice(0,9)) === Number(_cpf[9]) && calculateVerifierDigit(_cpf.slice(0,10)) === Number(_cpf[10]))
};


function generate(){
    let base = (min = 100000000, max = 999999999) => {
        return String(Math.floor(Math.random() * (max - min) + min))
    }
    let _cpf = Array.from(base());
    function returnVerifierDigit(base){ 
        let sum = 0;
        for(let i = 0; i < base.length; i++){
            sum += Number(base[i]) * (base.length + 1 - i);
        };
        return (11 - (sum % 11) > 9) ? 0 : 11 - (sum % 11);
    }; 
    _cpf.push(String(returnVerifierDigit(_cpf)));
    _cpf.push(String(returnVerifierDigit(_cpf)));
    return _cpf;
}

exports.validate = validate;
exports.generate = generate;