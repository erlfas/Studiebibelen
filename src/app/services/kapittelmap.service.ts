import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { KapittelMap } from '../models/kapittelmap.model';

@Injectable()
export class KapittelMapService {

    constructor(private http: Http) {

    }

    get(): Observable<KapittelMap[]> {
        const url: string = "http://localhost:8080/Studiebibelen/rest/kapittelmap/alle";
        return this.http.get(url).map((response: Response) => {
            return (<any>response.json()).map(x => {
                console.log("json: " + x.bok);
                console.log("json: " + x.antall);
                
                var mp: Map<String, Number> = new Map<String,Number>();

                for (var key in x.kapittel2AntVers) {
                    console.log("key: " + key + ", value: " + x.kapittel2AntVers[key]);
                    mp.set(key, x.kapittel2AntVers[key]);
                }

                return new KapittelMap({
                    bok: x.bok,
                    antall: x.antall,
                    kapittel2AntVers: mp
                });
            });
        });
    }

}