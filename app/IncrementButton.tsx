type IncrementButtonProps = {
  onIncrement: () => void;
};

export default function IncrementButton({ onIncrement }: IncrementButtonProps) {
  return (
    <button className="btn btn-info" onClick={onIncrement}>
      Count3 növelése
    </button>
  );
}
