import { Spinner } from '@nextui-org/react';

interface LoadingProps {
  title?: string;
  dots?: boolean;
}
const Loading = ({ title, dots }: LoadingProps) => {
  if (dots) {
    return (
      <div className="flex h-6 w-8 items-center justify-center space-x-1">
        <div className="size-1 animate-bounce rounded-full bg-gray-200 [animation-delay:-0.3s]"></div>
        <div className="size-1 animate-bounce rounded-full bg-gray-200 [animation-delay:-0.15s]"></div>
        <div className="size-1 animate-bounce rounded-full bg-gray-200"></div>
      </div>
    );
  }
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center">
      {title && <p className="text-sky-950">{title}</p>}
      <Spinner size="lg" />
    </div>
  );
};
export { Loading };
