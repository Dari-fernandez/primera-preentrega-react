import NavBar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categorias/:idCategorias" element={<ItemListContainer />} />
                    <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App