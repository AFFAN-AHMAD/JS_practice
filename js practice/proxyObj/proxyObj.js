let obj = {
    i: 0
};
/**
 * modify obj so that its value increases on every action on i
 */

obj = new Proxy(obj,{
    get:(target,property)=>{
        if(property == 'i'){
            target[property] = target[property] +1;
            return target[property]
        }
    }
});

console.log(obj.i)
console.log(obj.i)
console.log(obj.i)