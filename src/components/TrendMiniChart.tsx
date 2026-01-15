export default function TrendMiniChart({ values }: {values: number[]}) {
  const max = Math.max(...values);

  return (
    <div className="flex items-end gap-2 h-16">
      {values.map((value, i) => (
        <div
          key={i}
          className="flex-1 bg-blue-500 rounded"
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  );
}
