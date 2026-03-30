import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MainLayout() {
  return (
    <div>
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default MainLayout
