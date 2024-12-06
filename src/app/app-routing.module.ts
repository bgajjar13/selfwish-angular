import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProfileMenuMobileComponent } from './profile-menu-mobile/profile-menu-mobile.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { EditProfileAppComponent } from './edit-profile-app/edit-profile-app.component';
import { ContactusComponent } from './pages/contactus/contactus.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'account-settings',
    component:AccountSettingsComponent
  },
  {
    path:'list-requests',
    component:ListRequestsComponent
  },
  {
    path:'add-activity',
    component:AddActivityComponent
  },
  {
    path:'my-activities',
    component:MyActivitiesComponent
  },
  {
    path:'my-inbox',
    component:MyInboxComponent
  },
  {
    path:'participants',
    component:ParticipantsComponent
  },
  {
    path:'search-activities',
    component:SearchActivitiesComponent
  },
  {
    path:'activity-detail',
    component:ActivityDetailComponent
  },
  {
    path:'chat-detail',
    component:ChatDetailComponent
  },
  {
    path:'profile-menu-mobile',
    component:ProfileMenuMobileComponent
  },
  {
    path:'landing-screen',
    component:LandingScreenComponent
  },
  {
    path:'edit-profile-app',
    component:EditProfileAppComponent
  },
  {
    path:'pages/contactus',
    component:ContactusComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
