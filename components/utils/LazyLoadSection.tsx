import { useInView } from "./UseInView";

export default function LazySection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, isVisible } = useInView(300); // load 300px before in view
  return <div ref={ref}>{isVisible ? children : null}</div>;
}
