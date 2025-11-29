var direction: "up" | "down" | "left" | "right";

direction = "up";


var sayidegerleri: 1 | 2 | 3 | 4 | 5;
var degerler: 1|10|"merhaba"|true;

// | işareti ile birden fazla tip tanımlanabilir.

// as const ile değişkenin değerinin sabit kalması sağlanır.

var sabitDeger = "merhaba" as const;
var direction2: "up" | "down" | "left" | "right" = "up";
//direction2 = sabitDeger; // hata verir çünkü sabitDeger tipi "merhaba" dır.
// direction2 değişkeni sadece "up","down","left","right" değerlerini alabilir.

let secilenyonDirection:typeof direction[number];
