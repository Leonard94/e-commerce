import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}
