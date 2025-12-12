type Personel = {
    id: number;
    ad: string;
    rol: string;
};
type worker = {
    ucret?: number;
    calismaSaat: number;
    yas: number;
    departman?: string;
};
type Employee = Personel & worker;
declare var personel1: Employee;
//# sourceMappingURL=ders12.d.ts.map