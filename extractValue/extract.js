function extract(json,key,path="",resultMap = new Map()){
    
    let value = null;
    for(let _key in json){
        value = json[_key];
        if(typeof value == "object"){
            extract(value,key,`${(path)?`${path}/`:""}${_key}`,resultMap);
        }else{
            resultMap.set(`${path}`,value)
        }
    }
    return resultMap;
}

// const result = extract({
//     uui:"1",
//     jhon:{
//         uui:"2"
//     },
//     mary:{
//         mama:{
//             papa:{
//                 uui:"5"
//             }
//         },
//         tio:{
//             uui:"10"
//         }
//     }
// },"uui");

// console.log(result);

module.exports = extract;
