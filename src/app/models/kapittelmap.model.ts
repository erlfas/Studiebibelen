
export class KapittelMap {
    bok: string;
    antall: number;
    kapittel2AntVers: Map<String, Number>;

    constructor(obj?: any) {
        this.bok = obj && obj.bok || null;
        this.antall = obj && obj.antall || null;
        this.kapittel2AntVers = obj && obj.kapittel2AntVers || null;
    }
}