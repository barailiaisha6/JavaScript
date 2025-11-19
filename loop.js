function sum(n){
     let add = 0;
    for(let i=0; i<=n; i++){
        add = add + i;
    }
    return add;
}
console.log("sum of natural number is ", sum(5));