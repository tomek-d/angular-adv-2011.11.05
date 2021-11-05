import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Zone.current.fork({
//   name: 'Demo zone'
// }).run(() => {
//   console.log('Inside zone...');
//   setTimeout(() => console.log('Timeout'), 0);
//   console.log('End of zone...');

// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
