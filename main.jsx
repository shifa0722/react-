
import { createRoot } from 'react-dom/client'
let element = <h1>hello world</h1>
createRoot(document.getElementById('root')).render(element);

let r = createRoot(document.getElementById('root2'))
r.render(element);
