# obyektde key -value shorthand edilishi
```
// const getStats = (arr)=>{
//        const max = Math.max(...arr);
//        const min = Math.min(...arr);      
//        const sum = arr.reduce((total, val)=>total+val);
//        return {
//               max:max,
//               min:min,
//               sum:sum
//        }
// }

// const reviews = [100,50,63,59,89,80,45,222,47,65,0];

// let stat = getStats(reviews);
// console.log(stat);


const getStats = (arr)=>{
       const max = Math.max(...arr);
       const min = Math.min(...arr);      
       const sum = arr.reduce((total, val)=>total+val);
       return {
              max,
              min,
              sum
       }//shu yerde obyektde shorthand edilyar..
       // eger obyektde key we value menzhesh bolsa min:min, max:max, sum:sum gornushi 
       //  max,
      // min,
       //sum
       // gornushe uytgedip bolyar
}

const reviews = [100,50,63,59,89,80,45,222,47,65,0];

let stat = getStats(reviews);
console.log(stat);
```
