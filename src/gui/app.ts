import './app.scss'
import crayon from 'crayon';
import react from 'crayon-react';
import { GlobalContext } from 'global-context'
import * as pages from '~/gui/pages'
import { state } from './state'

void async function main(){
  const router = crayon.create()
  router.use(react.router())
  router.use(react.withContext(GlobalContext, state))

  router.path('/', (req, res) => res.mount(pages.Home))

  state.router = router
  router.load()
}()


// Demo stuff
import './demo-stuff'