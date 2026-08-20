import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Dr. Syed Haider Abbas Rizvi - Strategy & Business Operations Leader | Applied Research to Commercial Execution',
  description: 'Strategy and operations leader with a PhD from IIT Delhi. Built and scaled Solarad AI from zero to a 6-country footprint and 100+ deployed utility-scale plants (~10 GW), following 6 years of industry-funded research generating USD 35M+ commercial impact.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomepageInteractive />
    </main>
  );
}