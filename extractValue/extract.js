function extract(json,key,path="",resultMap = new Map(),isKey=false){
    
    let value = null;
    for(let _key in json){
        value = json[_key];
        if(typeof value == "object"){
            extract(value,key,`${(path)?`${path}/`:""}${_key}`,resultMap);
        }else{
            if(key===_key){
                resultMap.set(`${path}`,value);
            }
            
        }
    }
    return resultMap;
}

module.exports = extract;
