declare const objem: {
    id: number;
    ad: string;
    rol: string;
    function(): void;
    adres: {
        (arrayLength: number): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        (...items: {
            sehir: string;
            ilce: string;
            no: number;
        }[]): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        new (arrayLength: number): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        new (...items: {
            sehir: string;
            ilce: string;
            no: number;
        }[]): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        of<T>(...items: T[]): T[];
        readonly [Symbol.species]: ArrayConstructor;
    };
};
declare const xs: {
    id: number;
    ad: string;
    rol: string;
    function(): void;
    adres: {
        (arrayLength: number): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        (...items: {
            sehir: string;
            ilce: string;
            no: number;
        }[]): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        new (arrayLength: number): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        new (...items: {
            sehir: string;
            ilce: string;
            no: number;
        }[]): {
            sehir: string;
            ilce: string;
            no: number;
        }[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        of<T>(...items: T[]): T[];
        readonly [Symbol.species]: ArrayConstructor;
    };
};
declare const data: {
    id: number | string;
    levels?: Levels;
    name?: String;
    status: "x" | "y";
};
//# sourceMappingURL=ders13.d.ts.map