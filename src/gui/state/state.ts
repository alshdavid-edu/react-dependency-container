import { env } from '~/gui/environment';
import { ThemeEngine } from '~/platform/theme';
import axios, { AxiosInstance } from 'axios'
import { Router } from 'crayon';

export const httpClient = axios.create()
export const themeEngine = new ThemeEngine(env.THEME_API, httpClient)

export interface State {
  router?: Router
  httpClient?: AxiosInstance
  themeEngine?: ThemeEngine
}

export const state: State = {
  httpClient,
  themeEngine
}
