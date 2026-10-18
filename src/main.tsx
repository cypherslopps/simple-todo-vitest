import { render } from 'preact'
import { Provider } from 'react-redux'
import './index.css'
import { App } from './app.tsx'
import { store } from './store.ts'

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app')!)
