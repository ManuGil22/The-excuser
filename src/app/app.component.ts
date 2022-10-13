import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcuseService } from './services/excuse-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The-Excuser';
  excuse: string = '';
  excuseSubscription: Subscription = new Subscription();

  constructor(private excuser: ExcuseService) { }

  ngOnDestroy(){
    this.excuseSubscription.unsubscribe();
  }

  handleExcuse(category:string){
    this.excuseSubscription = this.excuser.getExcuse(category).subscribe((data) => {
      this.excuse = data[0].excuse;
      if (this.excuse){
        const container = document.getElementById('container');
        if (container){
          container.classList.remove('hidden');
        }
      }
    });
  }
}

