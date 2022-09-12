(function(){


    function sortArray01(arr, size){
        let left = 0;
        let right = size-1;
        while(left<right){

            while(arr[left] == 0 && left<right){
                left++;
                
            }
            while(arr[right]==1 && left<right){

                right--;
            }
            if(left<right){
                arr[left]=0;
                arr[right]=1;
                left++;
                right--;
            }

        }
        return arr;
    }
    let arr = [1,0,1,0,0,1,1,0,0];
    console.log(arr)
    let n = arr.length;
    let a = sortArray01(arr, n);
    console.log("output"+ a);



})();