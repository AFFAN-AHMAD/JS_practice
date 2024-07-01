function Example (blog){
    this.blog = blog;
    console.log("thissssss",this)
    this.displayBlog = function (){
        console.log(this.blog);
    };
    console.log("after",this)
};

// const newInstance = new Example("learnersBucket");
// console.log("newIntance",newInstance)

const otherInstance = Example("MDN");
console.log("otherInstance",otherInstance)