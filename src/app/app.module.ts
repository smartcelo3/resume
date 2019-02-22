import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { MenuComponent } from './menu/menu.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
