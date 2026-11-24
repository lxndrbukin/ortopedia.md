import { type JSX } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps): JSX.Element {
  return (
    <span className={`logo-name ${className}`.trim()}>
      ORTOPEDIA<span className='logo-dot'>.</span>
    </span>
  );
}
