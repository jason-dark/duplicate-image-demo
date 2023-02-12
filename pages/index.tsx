import { DemoImage } from '@/components/DemoImage';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        maxWidth: '1000px',
        textAlign: 'center',
      }}
    >
      <Navbar />
      <h1 style={{ marginBottom: '20px' }}>Home Page</h1>
      <DemoImage />
    </div>
  );
}
