import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { ProfileMenuMobileComponent } from './profile-menu-mobile/profile-menu-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { MyInboxComponent } from './my-inbox/my-inbox.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SearchActivitiesComponent } from './search-activities/search-activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { EditProfileAppComponent } from './edit-profile-app/edit-profile-app.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HeaderMobileChatComponent } from './header-mobile-chat/header-mobile-chat.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MyprofileComponent,
    AccountSettingsComponent,
    ListRequestsComponent,
    AddActivityComponent,
    MyActivitiesComponent,
    MyInboxComponent,
    ParticipantsComponent,
    SearchActivitiesComponent,
    ActivityDetailComponent,
    ChatDetailComponent,
    FooterMobileComponent,
    ProfileMenuMobileComponent,
    LandingScreenComponent,
    EditProfileAppComponent,
    ContactusComponent,
    HeaderMobileChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
