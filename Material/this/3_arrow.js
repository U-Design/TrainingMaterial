let obj = {
    myVar: 'foo',

    myFunc: () => {
        console.log(this.myVar)
    }
}
obj.myFunc() // undefined


// var b = a => a













function bar() {

    let obj = {
        myVar: 'foo',

        myFunc: () => {
            console.log(this.myVar)
        }
    }

    return obj;
}

let aObj = bar.call(obj);
aObj.myFunc();