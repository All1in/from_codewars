Function.prototype.myBind = function(context, ...args) {
    console.log(context)
    return (...rest) => {
        return this.call(context, ...args.concat(rest))
    }
}

function log(...props) {
    console.log(this.name, this.age, ...props)
}

const obj = {name: 'ALll1In', age: 19}

log.myBind(obj,1, 2)()