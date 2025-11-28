type QueryParamsDisplayProps = {
  params: Record<string, string | string[] | undefined>;
};

export function QueryParamsDisplay({ params }: QueryParamsDisplayProps) {
  const hasParams = Object.keys(params).length > 0;

  return (
    <div>
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Query Parameters:
      </span>
      <div className="mt-2 space-y-1">
        {hasParams ? (
          Object.entries(params).map(([key, value]) => (
            <div
              key={key}
              className="flex gap-2 rounded bg-zinc-100 p-2 font-mono text-sm dark:bg-zinc-800"
            >
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                {key}:
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                {Array.isArray(value) ? value.join(", ") : value}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500">No query parameters</p>
        )}
      </div>
    </div>
  );
}
