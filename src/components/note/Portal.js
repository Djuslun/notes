import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const [container] = useState(() => {
    const el = document.createElement('div')
    el.classList.add('wrapper')
    return el
  })

  useEffect(() => {
    document.body.appendChild(container)
    document.body.classList.add('block')
    return () => {
      document.body.removeChild(container)
      document.body.classList.remove('block')
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}
export default Portal