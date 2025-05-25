import Footer from "../components/shared/Footer";
import Header from "../components/shared/header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";

export default function Home(){
    return(
        <>
            <Header/>
            <Hero />
            <div className="container py-5">
              <ProductList limit={2} /> 
              <div className="text-center mt-4">
                <a href="/books" className="btn btn-primary">Lihat Semua Buku</a>
              </div>
            </div>
            <Footer />
        </>
    )
}