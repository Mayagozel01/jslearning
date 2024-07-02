### js boyuncha gysgacha sorag-jogap

#### 1.ashakdaky kod browzerin konsolynda name jogap berer?
```
var a = 10;
function foo() {
    console.log(a); // ??
    var a = 20;
}
foo();
```

jogaby : undefined
##
sebabi var-da beyan edilen uytgeyjiler - bu hoisted uytgeyjiler. bu diyildigi haysy scope-da beyan edilendigine seretmezden
ozunin yerine yetyan scope-ynda inisiyalizasiya edilip bilner. 
yagny bu yagdayda REFERNCEError dal-de undefined berer.
ashakdaky linklerde doly maglumat tapyp bilersiniz [1](https://dev.to/aman_singh/so-you-think-you-know-javascript-5c26) [2](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
###
#### 2. eger var-a derek let ya-da const ulanylsa, jogap uytgarmi?
```
var a = 10;
function foo() {
    console.log(a); // ??
    let a = 20;
}
foo();

```
jogaby: ReferenceError: a is not defined.
##
sebabi let hem-de const-da beyan edilen uytgeyjlerde [temporal dead zone TDZ](https://exploringjs.com/es6/ch_variables.html#sec_temporal-dead-zone) bar. ol 
ol uytgeyji scope-dan (etrabyndan) dashynda var-da beyan edilen hem bolsa, oz scope-ynda ta inisializasiya (beyan )edilyancha yetip bolmayar.

