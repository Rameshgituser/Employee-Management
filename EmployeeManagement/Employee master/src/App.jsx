
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import EmployeeList from './components/EmployeeList'
import EmployeeRegistration from './components/EmployeeRegistration'
import { store } from './reducers/store'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const employeeRouter = createBrowserRouter(
    [
        {

          path:"/",
          element:<EmployeeList/>
        },

        {

          path:"/EmployeeRegistration",
          element:<EmployeeRegistration/>
        }
     
    ]
  )

  return (
    <Provider store={store}>
     <RouterProvider router={employeeRouter}/>

    </Provider>
  )

}
export default App;
