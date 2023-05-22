let l = new Array()

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(function (element) {
        return values_list.indexOf(element) === -1;
    });
}

let integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
let values_list = [1, 3]

console.log(l.remove_(integer_list, values_list))
