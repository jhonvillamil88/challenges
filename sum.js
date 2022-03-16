function sum(x){
    if(!x){
        return (f)=>{
            return f(print(0));
        };
    }
    return (y)=>{
        if(typeof y != 'number'){
            return y(print(x));
        }
        return (k)=>{
            if(typeof k != 'number')return k(print(x+y));
            return (f)=>{
                return f(print(x+y+k));
            }
        };
    };
  }

  function print(text){
    return `prints: -> ${text}`;
  }
  
  module.exports = sum;
