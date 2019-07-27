import './app.scss'
import crayon from 'crayon';
import react from 'crayon-react';
import * as pages from '~/gui/pages'
import { StateContext, state } from './state'

void async function main(){
  const router = crayon.create()
  router.use(react.router())
  router.use(react.withContext(StateContext, state))

  router.path('/', (req, res) => res.mount(pages.Home))

  state.router = router
  router.load()
}()



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
