import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import ProductCards from "./Components/ProductCards/ProductCards";
import products from "./Data/products";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
<div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "10px"
}}>
  {products.map((product) => (
    <ProductCards key={product.id} product={product} />
  ))}
</div>

   
  
    </>
  );
}

export default App;
