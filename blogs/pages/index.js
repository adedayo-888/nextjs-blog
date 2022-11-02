import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/Banner';
import Latest from '../components/Latest';
import Popular from '../components/Popular';
import Category from '../components/Category';
const Home = ({ children }) => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Layout>
        <main>
          <Banner />
          <Latest />
          <Popular />
          <Category />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
