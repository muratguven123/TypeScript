"use strict";
/*
Medidator pattern davraışsall bir kalıp olup birbirine bağlanmış nesnelerin sistemdeki karmaşıklığını azaltmak için nesnelerin arasında nesneler ile konuşabilecek bir araca(mediator) koyarak
sistemdeki many-to-many ilişkileri one-to-many ilişkiye dönüştürür bu sayade nesneler arasındaki bağımlılık azalır ve sistem daha yönetilebilir hale gelir
burada analoji yapmak istersek genellikle hava kontrol kulesi örneğini vermek doğru olur şunu düşünelim uçaklar piste iniş sırasında birbirleri ile doğrudan iletişim kursa karmaşıklık çok artacak
ve aynı zamanda diğelimki uçak sayısı n burada n^2 kadar iletişim kanalı gerekecek
bu durumda bir hava kontrol kulesi devreye girer ve tüm uçaklar kule ile iletişim kurar kulede uçakların iniş ve kalkışlarını yönetir bu sayede
n tane uçak için sadece n tane iletişim kanalı yeterli olur
*/
class LandingMediator {
    constructor() {
        this.planes = [];
    }
    sendMassege(message, plane) {
        this.planes.forEach(p => {
            if (p !== plane) {
                p.receive(message);
            }
        });
    }
    addPlane(plane) {
        this.planes.push(plane);
    }
}
class Plane {
    constructor(isim, mediator) {
        this.mediator = mediator;
        this.isim = isim;
        mediator.addPlane(this);
    }
}
class ConcretePlane extends Plane {
    send(msg) {
        console.log(`${this.isim} gönderilen mesaj: ${msg}`);
        this.mediator.sendMassege(msg, this);
    }
    receive(msg) {
        console.log(`${this.isim} alınan mesaj: ${msg}`);
    }
}
// Example usage:
const mediator = new LandingMediator();
const plane1 = new ConcretePlane("Uçak 1", mediator);
const plane2 = new ConcretePlane("Uçak 2", mediator);
const plane3 = new ConcretePlane("Uçak 3", mediator);
plane1.send("İniş izni istiyorum.");
plane2.send("Kalkış izni istiyorum.");
plane3.send("Yakıt ikmali yapmam gerekiyor.");
function sendMassege() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=mediator.js.map