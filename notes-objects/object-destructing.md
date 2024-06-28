## destructing objects
```
// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

```
### bu obyekt
```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

```

### cep tarapda sag tarapda haysy key-ler ulanylan bolsa, shony ulanmaly. hersi ozune degishli variable-e dakylar. 
### destructure- bu edil bir uytgeyja obyekti bir propertisini baha hokmunde dakan yaly goz onune getirmeli.
```
let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

```
## shu bn ashakdaky ikisi bir ishi yerine yetiryar.

```
let title = options.title;
let width = options.width;
let height = options.heigth;

```
### munda obyekt uytgeman galyar.
## eger-de obyekti taze atly variable- e dakmak isleniz onda 
```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

```

