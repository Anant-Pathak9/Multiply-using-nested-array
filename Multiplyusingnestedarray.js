function mult(arr){
    var product = 1;
    for(var i=0;i<arr.length;i++){
        for(var j=0 ; j<arr[i].length; j++){
            product*=arr[i][j];
        }
    }
    return product;

}
var Myarray=[[1,2],[2,3],[3,4,6]];
console.log(mult(Myarray));
