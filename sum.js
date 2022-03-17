function sum(a) {
    if(typeof a == "function"){
        return a(`prints: -> 0`);
    }
    return b => typeof b === 'function' ? b(`prints: -> ${a}`) : sum(a+b);
}
module.exports = sum;
