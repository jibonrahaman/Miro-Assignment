import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements} from 'react-router'
import Home from "../pages/Home";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
        path="/"
        element={<Home/>}
        >
        </Route>
    )
)
export default router