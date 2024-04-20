import { createRoot } from "react-dom/client"
import "./styles/index.css"
import HomePage from "./pages/Home"

const App = (
  <div>
    <HomePage />
  </div>
)

createRoot(document.getElementById("root") as Element).render(App)
