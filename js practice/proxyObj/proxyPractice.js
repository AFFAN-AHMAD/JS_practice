let obj  = {
    name:"Affan"
};

obj = 
new Proxy(obj, {
    get: function(target, property){
        console.log("props",property);
        console.log("target",target);
        // if I dont return the property from here and try to access obj.name, I will get undefined
        return property
    },
    set: function(target,props,value){
        console.log("target inset",target);
        console.log("props inset",props);
        console.log("value inset",value);
        if(props == 'age' && isNaN(value)){
            throw new Error('age must be a number')
        }

        target[props] = value
        return props
    }
});


console.log('name',obj.name)

obj.age = '25';
console.log('obj',obj);