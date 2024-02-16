import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy ,Suspense} from "react"
const Dashboard = lazy(() => import("./pages/dashboard"))
const Products = lazy(() => import("./pages/products"))
const Transaction = lazy(() => import("./pages/transaction"))
const Customers = lazy(() => import("./pages/customers"))
import Loader from "./components/loader"
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products/>} />
          <Route path="/admin/customer" element={<Customers/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App