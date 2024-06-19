import PxConvertion from '@/components/pxConvertion/pxConvertion';
import PageHeader from '@/components/pageHeader/pageHeader';

function Home() {
  return (
    <main className='app-container'>
      <PageHeader
        title='PX converter'
        description='Convert your px values to any option available.'
      />
      <PxConvertion />
    </main>
  );
}

export default Home;
