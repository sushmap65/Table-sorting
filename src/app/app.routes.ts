import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';
export const routes = [
	{path:'home', component: HomeComponent},
	{path:'contact', component: ContactComponent},
	{path:'setting', component: SettingsComponent}
];