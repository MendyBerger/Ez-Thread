# Ez-Thread
Easily create new threads, and pass in functions to execute.

## Installation
```npm i ez-thread```

## Usage
### Basic Usage
To run a function in a new thread just call the newThread function, and pass in your function you want to run in the new thread, like this:
```js
newThread(() => {
    // do somthing
});
```

### Returning Values
Returning is simple, just return whatever you want to return and it will be returned as a promise.
```js
let onePlusOne await = newThread(() => {
    return 1 + 1;
});
```

### Passing In Variables
You can also pass in variables to the new thread by adding a second parameter as an object and copying in all variables you want to access in the new thread.
```js
let a = 1, b = 2;
newThread(() => {
    return a + b;
}, {a, b});
```

Even more complex data structures like objects can be passed in:
```js
class SomeClass {
    constructor(){
        this.someProperty = 100;
    }
}

(async () => {
    let someObject = new SomeClass();
    let foo = 10;
    let bar = {
        baz: 50,
        qux: new Set()
    };
    let returnedValue = await newThread(() => {
        return someObject.someProperty + foo + bar.baz;
    }, {someObject, foo, bar});
    console.log(returnedValue);

})();
```


*\*Be aware you cannot pass in variables that point to functions or DOM elements.*

*\*Neither could you pass in classes (only instantiated objects can be passed in)*


## License
MIT License

Copyright (c) 2018 Mendy Berger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
