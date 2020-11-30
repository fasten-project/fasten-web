import { createBrowserHistory } from 'history'

export default createBrowserHistory({ basename: process.env.URL_BASE })
