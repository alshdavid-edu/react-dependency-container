import './app.scss'
import crayon from 'crayon';
import react from 'crayon-react';
import { GlobalContext } from 'global-context'
import * as pages from '~/gui/pages'
import { state } from './state'

const app = crayon.create()
app.use(react.router())
app.use(react.withContext(GlobalContext, state))

app.path('/', (req, res) => res.mount(pages.Home))

state.router = app
app.load()

// Demo stuff
import './demo-stuff'
