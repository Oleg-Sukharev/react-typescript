const SIZE: Record<"sm" | "md", string> = {
  sm: "size-6",
  md: "size-8",
};

type SizeTypes = keyof typeof SIZE;

interface CircularProgressProps {
  size?: SizeTypes;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ size = "md" }) => {
  return <div className={SIZE[size]}></div>;
};

export default CircularProgress;
