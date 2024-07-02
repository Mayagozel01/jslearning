### js boyuncha gysgacha sorag-jogap

## 1.ashakdaky kod browzerin konsolynda name jogap berer?
```
var a = 10;
function foo() {
    console.log(a); // ??
    var a = 20;
}
foo();
```

jogaby : undefined
sebabi var-da beyan edilen uytgeyjiler - bu hoisted uytgeyjiler. bu diyildigi haysy scope-da beyan edilendigine seretmezden
ozunin yerine yetyan scope-ynda inisiyalizasiya edilip bilner. 
yagny bu yagdayda REFERNCEError dal-de undefined berer.
ashakdaky linklerde doly maglumat tapyp bilersiniz [1](https://dev.to/aman_singh/so-you-think-you-know-javascript-5c26) [2](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
