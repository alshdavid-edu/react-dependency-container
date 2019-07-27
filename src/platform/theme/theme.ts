import { BehaviorSubject } from 'rxjs'
import { AxiosInstance } from 'axios'
import * as CSS from 'csstype';
import sleep from 'sleep-promise';
import { defaultTheme } from './default'

export class ThemeEngine {
  theme = new BehaviorSubject<CSS.Properties>(defaultTheme)

  constructor(
    private THEME_API: string,
    private http: AxiosInstance
  ) {}

  merge(styles: CSS.Properties) {
    this.theme.next({ 
      ...this.theme.getValue(),
      ...styles, 
    })
  }

  replace(styles: CSS.Properties) {
    this.theme.next(styles)
  }

  async fetch() {
    await sleep(2000) // artificial latency for demo purpose
    const result = await this.http.get(this.THEME_API)
    this.merge(result.data)
  }
}
