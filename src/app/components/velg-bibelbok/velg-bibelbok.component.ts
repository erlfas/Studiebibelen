import { 
  Component, 
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switch';

import { KapittelMap } from '../../models/kapittelmap.model';
import { KapittelMapService } from '../../services/kapittelmap.service';

@Component({
  selector: 'app-velg-bibelbok',
  templateUrl: './velg-bibelbok.component.html',
  styleUrls: ['./velg-bibelbok.component.css']
})
export class VelgBibelbokComponent implements OnInit {

  @Output() map: EventEmitter<KapittelMap[]> = new EventEmitter<KapittelMap[]>();

  constructor(private kapittekMapService: KapittelMapService) { }

  ngOnInit() {
    this.kapittekMapService.get()
      .subscribe((results: KapittelMap[]) => {
        this.map.next(results);
      });
  }

}
