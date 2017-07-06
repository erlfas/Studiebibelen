import { 
  Component, 
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { KapittelMap } from '../../models/kapittelmap.model';
import { KapittelMapService } from '../../services/kapittelmap.service';

@Component({
  selector: 'velg-bibeltekst',
  templateUrl: './velg-bibeltekst.component.html',
  styleUrls: ['./velg-bibeltekst.component.css']
})
export class VelgBibeltekstComponent implements OnInit {

  @Output() map: EventEmitter<KapittelMap[]> = new EventEmitter<KapittelMap[]>();

  kapittelMaps: KapittelMap[];

  constructor(private kapittekMapService: KapittelMapService) { }

  ngOnInit() {
    this.kapittekMapService.get()
      .subscribe((results: KapittelMap[]) => {
        this.map.next(results);
        this.kapittelMaps = results;
      });
  }

}
