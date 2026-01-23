import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Dr. Syed Haider Abbas Rizvi - Climate-Tech Founder & Research Leader | ClimateLeader',
  description: 'Executive climate-tech founder portfolio bridging PhD-level research with utility-scale execution. 10+ GW solar capacity, 100+ plants deployed across India & Middle East. Founder of Solarad AI and CredoCarbon platforms.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomepageInteractive />
    </main>
  );
}