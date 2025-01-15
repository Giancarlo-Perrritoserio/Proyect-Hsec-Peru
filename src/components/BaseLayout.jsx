import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
