interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}
declare abstract class AbstractHandler implements Handler {
    private nextHandler;
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}
declare class BotHandler extends AbstractHandler {
    handle(request: string): string | null;
}
declare class SupportAgentHandler extends AbstractHandler {
    handle(request: string): string | null;
}
declare class ManagerHandler extends AbstractHandler {
    handle(request: string): string | null;
}
declare const bot: BotHandler;
declare const agent: SupportAgentHandler;
declare const manager: ManagerHandler;
declare function clientCode(handler: Handler): void;
//# sourceMappingURL=CoR.d.ts.map