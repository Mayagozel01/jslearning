# jslearning
# js-owrenmek
# programirleme
## here is js examples to understand each theme reduce.
```

//using reduce to find the max element in array
const grades =[10,30,863,-5,78,545,45];

const maxGrade = grades.reduce((**max**, currentVal)=>{
    if (currentVal>max) return currentVal;
return max

})
console.log(maxGrade);
// everytime max value becomes currentVal and then it will be compared with next element
// first argument in reduce is the specific chased value and second argument is currentValue that will be chased in conditon of callback

```
