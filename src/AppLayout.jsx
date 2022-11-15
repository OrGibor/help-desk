import { BrowserRouter } from 'react-router-dom'

export const AppLayout = ({children}) => {
  return (
    <BrowserRouter>
      <div>
        {children}
      </div>
    </BrowserRouter>
  )
}