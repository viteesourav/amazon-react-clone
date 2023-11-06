import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, HomePage, Navbar, ProductPage, SearchResults } from './Components'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/product/:productId" element={<ProductPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}
