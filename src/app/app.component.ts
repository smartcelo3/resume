import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { ContentModel } from './models/content.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  content : ContentModel;
  constructor(private contentService : ContentService) { 
    this.getContent('pt-br');
  }

  public setLanguage(language:string):void{
    this.getContent(language);
  }

  getContent(language: string){
    this.content = this.contentService.getContent(language);
  }
}
