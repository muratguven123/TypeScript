// 1. Handler Arayüzü: Zincirdeki tüm halkaların uyması gereken kural
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

// 2. Temel (Abstract) Handler: Zincir bağlama mantığını burada kuruyoruz.
// Böylece her yeni sınıfta "setNext" kodunu tekrar yazmayız.
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Zincirleme ekleme yapabilmek için handler'ı geri döndürürüz.
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null; // Zincirin sonuna gelindi ve kimse işleyemedi.
    }
}

// 3. Somut Handler'lar (Concrete Handlers)

// Seviye 1: Otomatik Bot
class BotHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Sifre_Sifirlama') {
            return `Bot: Şifreniz sıfırlandı. İşlem tamam.`;
        }
        // Çözemezsem bir sonrakine paslarım:
        return super.handle(request);
    }
}

// Seviye 2: Müşteri Temsilcisi
class SupportAgentHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Fatura_Itiraz') {
            return `Temsilci: Faturanız incelendi ve düzeltildi.`;
        }
        return super.handle(request);
    }
}

// Seviye 3: Teknik Yönetici
class ManagerHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Sistem_Coktu') {
            return `Yönetici: Kritik hata alındı, ekipler yönlendirildi.`;
        }
        return super.handle(request);
    }
}

// --- İstemci Kodu (Client) ---

// 1. İşleyicileri oluştur
const bot = new BotHandler();
const agent = new SupportAgentHandler();
const manager = new ManagerHandler();

// 2. Zinciri kur: Bot -> Temsilci -> Yönetici
bot.setNext(agent).setNext(manager);

// 3. İstekleri gönder (İstemci sadece ilk halkayı (bot) tanır)
function clientCode(handler: Handler) {
    const requests = ['Sifre_Sifirlama', 'Fatura_Itiraz', 'Sistem_Coktu', 'Kahve_Ismarla'];

    for (const req of requests) {
        console.log(`\nİstemci: "${req}" isteği gönderiliyor...`);
        
        const result = handler.handle(req);
        
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  Zincir: "${req}" isteği hiç kimse tarafından karşılanamadı.`);
        }
    }
}

clientCode(bot);