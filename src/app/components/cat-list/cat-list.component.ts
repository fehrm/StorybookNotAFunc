import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CatFact } from "src/app/models/cat-fact.model";
import { CatService } from "src/app/services/cat.service";

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html'
})
export class CatListComponent implements OnInit, OnDestroy {
  @Input()
  nrOfItems = 3;
  private subscriptions = new Subscription();
  public dataIsLoaded = false;
  public catList: CatFact[] = [];
  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.catService.get(this.nrOfItems).subscribe((x) => {
      this.catList = x;
      this.dataIsLoaded = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
