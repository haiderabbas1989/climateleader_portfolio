import type { Metadata } from 'next';
import ResumeContent from './ResumeContent';

export const metadata: Metadata = {
  title: 'Résumé — Dr. Syed Haider Abbas Rizvi',
  description: 'Strategy & Business Operations Leader — Applied Research to Commercial Execution.',
};

export default function ResumePage() {
  return <ResumeContent />;
}
