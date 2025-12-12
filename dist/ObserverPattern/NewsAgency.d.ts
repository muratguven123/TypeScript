interface Observer {
    update(news: string): void;
}
declare class NewsAgency {
    private observers;
    private news;
    constructor();
    subscribe(observer: Observer): void;
    notifyObservers(): void;
    setNews(news: string): void;
}
declare class NewsChannel implements Observer {
    private isim;
    private newsagency;
    constructor(isim: string, newsagency: NewsAgency);
    setİsim(isim: string): void;
    update(news: string): void;
}
declare class Main {
    static main(): void;
}
//# sourceMappingURL=NewsAgency.d.ts.map