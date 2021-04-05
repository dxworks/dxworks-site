import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {firebaseConfig} from '../../firebaseConfig';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContributeComponent} from './components/contribute/contribute.component';
import {MissionComponent} from './components/mission/mission.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MatCardModule} from '@angular/material/card';

const components: any = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  ContributeComponent,
  MissionComponent,
  ProjectsComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
