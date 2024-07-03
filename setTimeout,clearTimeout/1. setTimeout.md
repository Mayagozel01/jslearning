setTimeout() - funksiyanyn belli bir vagt gecheninden son chagyrylmagyny upjun edyar.
###
setTimeout(function, time) - gurlushy boyuncha 2 argumenti kabul edyar.
###
1-nji yerine yetirilmeli funksiya, 2-nji bolsa millisekuntlarda gorkezilen vagt.
```
 setTimeout(()=>{
  console.log("salam dunya")
}, 
5000)

setTimeout(()=>{
  console.log('eyyam 10 sekun gechdi.... Gowumy?')
},
10000
)

```
setTimeout funksiyanyn ozi id gaytaryp beryar. yagny belli bir san
```
setTimeout(()=>{
  console.log("salam dunya")
}, 
5000)

console.log(
setTimeout(()=>{
  console.log('eyyam 10 sekun gechdi.... Gowumy?')
},
10000)
)

// shu console.log bize 2 gaytaryp beryar, sebabi bu setTimeout tertibi boyunca 2-nji
// her setTimeout-a automatiki yagdayda id berilyar
```
##
