import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import ProductCards from "./Components/ProductCards/ProductCards";
import products from "./Data/products";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />

     {products.map((product) => (
  <ProductCards key={product.id} product={product} />
))}
  
    </>
  );
}

export default App;
