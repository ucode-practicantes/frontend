import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

import Speech from 'speak-tts';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export const speech = new Speech()
speech.init(
  {
    'onVoicesLoaded': (data) => {console.log('voices', data.voices)},
    'volume': 1,
    'lang': 'en-GB',
    'rate': 1,
    'pitch': 1,
    'voice':'Microsoft Zira Desktop - English (United States)',
    'splitSentences': true,

  }
).then((data) => {
  // The "data" object contains the list of available voices and the voice synthesis params
  console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})
