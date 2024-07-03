clearTimeout() --- bu setTimeout bn bilelikde ulanylyar.
onun yerine yetiryan funksiyasy setTimeout-y saklamak, yagny setTimeout-da yerine yetirilyan funksiyany yerine yetirilmanka saklamak(togtadmak)

clearTimeout(Id) --- belli bir san id-ini kabul edyar. bu id haysy setTimeout-a degishli bolsa shony hem saklar.
```

let timeOutId;

function timeOut (){

    timeOutId =  setTimeout(()=>{
    console.log("10 sekuntdan chap edildi");
  },
  10000);
// shu timeOutId-daki setTimeout-yn funksiyasy hich hachan yerine yetmez
// sebabi ol 10 sekuntdan son ishlemeli
// ashakdaky setTimeout funksiya 3sekuntda yagny
//yokarkydan onurti ishlarde yokarkyny clearTimeout eder(togtadar)


 setTimeout(()=>{
    clearTimeout(timeOutId);
    console.log('men yokarky funksiyany sakladym')
  },3000)
   
  
}


timeOut();

//3 sekunt gechenden son netije: 
//men yokarky funksiyany sakladym

```
###
inni bolsa iki sany setTimeout-ly funksiya doredelin timeOutId_1; timeOutId_2;
bularyn birinjisine 5 sekunt vagt goyalyn we ikinjisine 10 sekuntdan kichi totan vagt goyalyn
eger ikinji funksiyada (totan vagtly) 5 sekuntdan kichi san chyksa, onna ol birinji funksiyany(timeOutId_1 -i) togtadar.
eger tersine bolsa timeOutId_1 funksiya timeOutId_2-ini togtadar.
Yagny biri -birini random sana gora togtadyan funksiya

```
let timeOutId_1;
let timeOutId_2;


function timeOut (){


    timeOutId_1 =  setTimeout(()=>{
    console.log("5 sekuntdan chap edildi we ashakdaky funksiyany togtatdy");
    clearTimeout(timeOutId_2)
  },
  5000);



    timeOutId_2 = setTimeout(()=>{
    clearTimeout(timeOutId_1);
    console.log('men yokarky funksiyany sakladym')
  },
  Math.floor(Math.random()*10)*1000
  )
   
  
}


timeOut();
```

