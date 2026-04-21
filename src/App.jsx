import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import ProductCards from "./Components/ProductCards/ProductCards";
import products from "./Data/products";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />

<div><img src="/assets/images/mainimage.png" alt="" height={600} width="100%" /></div>


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

   <Whatsapp  />
  
  <Footer />
    </>
  );
}

export default App;
