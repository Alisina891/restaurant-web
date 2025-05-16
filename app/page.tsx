import Header from './components/Navbar';
import Main from './components/Main';
import SpecialDeshies from'./components/ScroolSection';
import CustomerS from './components/CustomerS';
import Server from './components/Services';
import Footer from './components/Footer';


export default function Home() {
  return (
      <main className='max-w-screen-2xl bg-white text-black px-[20px] md:px-[60px]'>
      <Header />
      <Main />
      <SpecialDeshies />
      <CustomerS />
      <Server />
      <Footer />
    </main>
  );
}
