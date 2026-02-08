import type { JSX } from "react";

type componentItem = JSX.Element | string;
interface HeaderProps {
  leftComponents?: componentItem[];
  middleComponents?: componentItem[];
  rightComponents?: componentItem[];
}

export default function Header({
  leftComponents,
  middleComponents,
  rightComponents,
}: HeaderProps): JSX.Element {
  if (
    !leftComponents?.length &&
    !middleComponents?.length &&
    !rightComponents?.length
  ) {
    return <div>no header components</div>;
  }
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* left side */}
        {leftComponents?.length && (
          <div className="flex items-center">
            {leftComponents.map((comp) => comp)}
          </div>
        )}
        {/* middle side */}
        {middleComponents?.length && (
          <div className="flex items-center">
            {middleComponents.map((comp) => comp)}
          </div>
        )}
        {/* right side */}
        {rightComponents?.length && (
          <div className="flex items-center">
            {rightComponents.map((comp) => comp)}
          </div>
        )}
      </div>
    </header>
  );
}
