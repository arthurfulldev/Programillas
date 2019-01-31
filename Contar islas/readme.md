# Programa contar islas.

Es un sencillo programa que recibe una cadena de texto.

similara a:
```
.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0.\n.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0.\n.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0. 
```

Donde cada uno de los caracteres es leido y se convierte a un item de una matriz. Donde cada valor de la matriz representa:

* "."   representa seccion de agua.
* '0'   representa seccion de tierra.
* "\n   representa cambio de renglon o arreglo

La cadena anterior se convertiria en la siguiente matriz bidimensional.

```
0:   [".", "0", "0", ".", ".", ".", "0", "0", "."]
1:   ["0", "0", ".", ".", "0", ".", ".", "0", "."]
2:   [".", "0", "0", ".", ".", ".", ".", "0", "."]
3:   ["0", "0", "0", "0", ".", ".", "0", "0", "."]
4:   [".", "0", "0", ".", ".", ".", "0", "0", "."]
5:   ["0", "0", ".", ".", ".", ".", ".", "0"]
6:   [".", "0", "0", ".", ".", ".", ".", "0", "."]
7:   [".", ".", ".", ".", "0", ".", ".", "0", "."]
8:   [".", "0", "0", ".", ".", ".", "0", "0", "."]
9:   ["0", "0", ".", ".", "0", ".", ".", "0", "."]
10:  [".", "0", "0", ".", ".", ".", ".", "0", "."]
11:  ["0", "0", "0", "0", ".", ".", "0", "0", "."]
12:  [".", "0", "0", ".", ".", ".", "0", "0", "."]
13:  ["0", "0", ".", ".", ".", ".", ".", "0"]
14:  [".", "0", "0", ".", ".", ".", ".", "0", "."]
15:  [".", ".", ".", ".", "0", ".", ".", "0", "."]
16:  [".", "0", "0", ".", ".", ".", "0", "0", "."]
17:  ["0", "0", ".", ".", "0", ".", ".", "0", "."]
18:  [".", "0", "0", ".", ".", ".", ".", "0", "."]
19:  ["0", "0", "0", "0", ".", ".", "0", "0", "."]
20:  [".", "0", "0", ".", ".", ".", "0", "0", "."]
21:  ["0", "0", ".", ".", ".", ".", ".", "0"]
22:  [".", "0", "0", ".", ".", ".", ".", "0", "."]
23:  [".", ".", ".", ".", "0", ".", ".", "0", "."]
```

## Resultados.

### Resultado 1:
Debe retornar 10 islas. Cadena: 
```
.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0.\n.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0.\n.00...00.\n00..0..0.\n.00....0.\n0000..00.\n.00...00.\n00.....0\n.00....0.\n....0..0.
``` 
![alt text](https://raw.githubusercontent.com/arthurfulldev/programillas/master/Contar%20islas/resultados/1.PNG "Logo Title Text 1")

### Resultado 2:
Debe retornar 1 islas. Cadena:
```
.00...00.\n00.....0.\n.00....0.\n00....00.\n.00...00.\n00.....0\n.00....0.\n00.....0.\n.0000000.
```

![alt text](https://raw.githubusercontent.com/arthurfulldev/programillas/master/Contar%20islas/resultados/2.PNG "Logo Title Text 1")

### Resultado 3:
Debe retornar 5 islas. Cadena: 
```
.00....0.\n0......00.\n.........\n0......0.
```

![alt text](https://raw.githubusercontent.com/arthurfulldev/programillas/master/Contar%20islas/resultados/3.PNG "Logo Title Text 1")

### Resultado 4:
Debe retornar 2 islas. Cadena: 
```
00..00.\n00...00\n0.....0
```

![alt text](https://raw.githubusercontent.com/arthurfulldev/programillas/master/Contar%20islas/resultados/4.PNG "Logo Title Text 1")
