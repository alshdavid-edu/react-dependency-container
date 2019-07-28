// DEMO STUFF
// -----------
import { themeEngine } from './state'

// Async action happening after init
themeEngine.fetch()

// Exposing service to the window for demoing reactivity
// Type the code below in your browser console to see
// the magic in action
/*
  themeEngine.replace({ 
    color: 'blue', 
    backgroundColor: 'red' 
  }) 
*/
;(window as any).themeEngine = themeEngine
