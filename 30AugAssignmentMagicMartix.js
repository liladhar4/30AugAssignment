(function(){

    function magicMatrix(arr, size){

        let sum1 = 0;
        let sum2 = 0;

        for(let i = 0; i<size; i++){
            sum1 = sum1+arr[i][i];
            sum2 = sum2+arr[i][size-i-1];
        }
        if(sum1!=sum2)
            return false;
        for(let i=0; i<size; i++){
            let col = 0;
            let row = 0;
            for(let j=0; j<size; j++){
                row = row+arr[i][j];
                col = col+arr[j][i];
            }
            if(row != col || col!=sum1)
            return false;
        }
        return true;


    }
    let matrixM = [[ 2, 7, 6 ],[ 9, 5, 1 ],[ 4, 3, 8 ]];
    let n = matrixM.length;
    console.log(magicMatrix(matrixM, n));
    let matrixM2 = [[1,2,2],[2,2,1],[2,1,2]];
    let m = matrixM2.length;
    console.log(magicMatrix(matrixM2,m));



})();