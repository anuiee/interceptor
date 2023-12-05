import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-http-interceptor';
  http = inject(HttpClient);

  constructor(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log(res);
      
    })
  }

}
