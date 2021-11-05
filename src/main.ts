import { enableProdMode, NgZone } from '@angular/core';
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

const zone = new NgZone({shouldCoalesceRunChangeDetection: true});

zone.onUnstable.subscribe(() => {
  console.log('ZONE Unstable!');
});

zone.onMicrotaskEmpty.subscribe(() => {
  console.log('ZONE MicrotaskEmpty!');
});

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: zone})
  .catch(err => console.error(err));
