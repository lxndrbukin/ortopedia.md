import { type JSX, type ReactNode } from 'react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  /** Size of the boot outline in px; omit to show the label only. */
  iconSize?: number;
  children?: ReactNode;
}

// Stand-in for photos until real images are available.
export default function ImagePlaceholder({
  label,
  className = '',
  iconSize,
  children,
}: ImagePlaceholderProps): JSX.Element {
  return (
    <div className={`image-placeholder ${className}`.trim()}>
      {children}
      {iconSize && (
        <svg
          aria-hidden='true'
          width={iconSize}
          height={iconSize}
          viewBox='0 0 64 64'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.2'
          strokeLinejoin='round'
        >
          <path d='M16 10h14v20c0 3 2 5 5 6l13 4c4 1 6 4 6 8v4H12V14c0-2 2-4 4-4z' />
          <path d='M12 46h42' />
        </svg>
      )}
      <span className='image-placeholder-label'>{label}</span>
    </div>
  );
}
