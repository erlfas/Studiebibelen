import { KapittelMapService } from './kapittelmap.service';

export const serviceInjectables: Array<any> = [
    {provide: KapittelMapService, useClass: KapittelMapService }
];