import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App ! chai</h1>
        </div>
    )
}
//const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {
        href:'https://google.om', target: '_blank'
    },
    'click me to visite google',
    anotherUser
)

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
    reactElement
)
