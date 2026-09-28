import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'wouter';
import { applySeo } from '@/seo';

/** The same page manifest controls generated HTML and client navigation. */
export default function SiteSEO({ children }: { children: ReactNode }) {
  const [path] = useLocation();
  useEffect(() => { applySeo(path); }, [path]);
  return <>{children}</>;
}
