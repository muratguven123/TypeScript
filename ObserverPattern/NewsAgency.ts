interface Observer {
    update(news: string): void;
}

class NewsAgency {
    private observers: Observer[] = [];
    private news: string = '';  
    constructor() {
     
    }
    
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }
    public notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.news));
    }
    setNews(news: string): void {
        this.news = news;
        this.notifyObservers();
    }

}
class NewsChannel implements Observer {
    private isim: string;
    private newsagency: NewsAgency;
    constructor(isim: string, newsagency: NewsAgency) {
        this.isim = isim;
        this.newsagency = newsagency;
        this.newsagency.subscribe(this);
    }   
    setİsim(isim: string): void {
        this.isim = isim;
    }

    update(news: string): void {
        console.log(`${this.isim} received news update: ${news}`);
    }

}
class Main {
    public static main(): void {
        const newsAgency = new NewsAgency();    
        const channel1 = new NewsChannel("Channel 1", newsAgency);
        const channel2 = new NewsChannel("Channel 2", newsAgency);
        newsAgency.setNews("Breaking News: Observer Pattern Implemented!");
}
}
// Çalıştırmak için main'i çağırıyoruz
Main.main();