import { Color } from '@shared/utils/types';

export function IconArrow({
  color,
  className,
  size,
  direction,
}: {
  color?: Color;
  className?: string;
  size?: number;
  direction: 'left' | 'right' | 'up' | 'down';
}) {
  const angleOfTransform: Record<'left' | 'right' | 'up' | 'down', number> = {
    left: 0,
    right: 180,
    up: 90,
    down: 270,
  };
  return (
    <svg
      width={`${size ?? 2.4}rem`}
      height={`${size ?? 2.4}rem`}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${angleOfTransform[direction]}deg)` }}
    >
      <path
        d="M9.2541 0.241064C9.55216 0.533264 9.57926 0.990508 9.33539 1.31272L9.2541 1.40503L2.52658 8L9.2541 14.595C9.55216 14.8872 9.57926 15.3444 9.33539 15.6666L9.2541 15.7589C8.95604 16.0511 8.48963 16.0777 8.16096 15.8386L8.06679 15.7589L0.745899 8.58198C0.44784 8.28978 0.420743 7.83254 0.66461 7.51033L0.745899 7.41802L8.06679 0.241064C8.39466 -0.0803548 8.92624 -0.0803548 9.2541 0.241064Z"
        fill={color ?? 'white'}
      />
    </svg>
  );
}
