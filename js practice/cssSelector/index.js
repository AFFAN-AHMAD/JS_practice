const generateSelector = function(root, target){
    const selectors = [];

    while(target != root){
        const nthChild = Array.from(target.parentNode.children).indexOf(target)+1;
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nthChild})`
        selectors.unshift(selector)
        target = target.parentNode;

    };

    selectors.unshift(`${target.tagName.toLowerCase()} [id="${target.id}"]`);
    return selectors.join(">")
}

const root = document.getElementById('root')
const target = document.getElementById('target');
console.log(generateSelector(root, target));


// use browser to test this code