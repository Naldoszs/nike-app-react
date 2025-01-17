import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
  Subscribe,
  SpecialOffer,
} from "./sections/index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => (
  <main className="relative">
    {/* D nav bar */}
    <NavBar />
    {/* THE Hero SECTION */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    {/* THE PopularProducts SECTION */}
    <section className="padding">
      <PopularProducts />
    </section>
    {/* THE SuperQuality SECTION */}
    <section className="padding">
      <SuperQuality />
    </section>
    {/* THE Services SECTION */}
    <section className="padding-x py-10">
      <Services />
    </section>
    {/* THE Specialoffer SECTION */}
    <section className="padding">
      <SpecialOffer />
    </section>
    {/* THE CustomeReviews SECTION */}
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    {/* THE Subscribe SECTION */}
    <section className="padding padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    {/* THE Footer SECTION */}
    <section className="padding bg-black padding-x padding-t pb-8 text-white">
      <Footer />
    </section>
  </main>
);

export default App;
