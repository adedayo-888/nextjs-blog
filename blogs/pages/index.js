import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/Banner';
const Home = ({ children }) => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Layout>
        <main>
          <Banner />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
