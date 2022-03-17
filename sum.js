function sum(a) {
    if(typeof a == "function"){
        return a(`prints: -> 0`);
    }
    return b => b === undefined ? a : sum(((typeof b !="number")?b(`prints: -> ${a}`):a+b));
}

 


sum(result=>{console.log("-> ",result)});
sum(1)(result=>console.log("-> ",result));
// sum(1)(2)(result=>console.log("-> ",result));
// sum(2)(3)(6)(result=>{console.log("-> ",result)});
module.exports = sum;
