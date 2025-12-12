"use strict";
class NewsAgency {
    constructor() {
        this.observers = [];
        this.news = '';
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.news));
    }
    setNews(news) {
        this.news = news;
        this.notifyObservers();
    }
}
class NewsChannel {
    constructor(isim, newsagency) {
        this.isim = isim;
        this.newsagency = newsagency;
        this.newsagency.subscribe(this);
    }
    setİsim(isim) {
        this.isim = isim;
    }
    update(news) {
        console.log(`${this.isim} received news update: ${news}`);
    }
}
class Main {
    static main() {
        const newsAgency = new NewsAgency();
        new NewsChannel("Channel 1", newsAgency);
        new NewsChannel("Channel 2", newsAgency);
        newsAgency.setNews("Breaking News: Observer Pattern Implemented!");
        new NewsChannel("Channel 3", newsAgency);
    }
}
// Çalıştırmak için main'i çağırıyoruz
Main.main();
//# sourceMappingURL=NewsAgency.js.map