type CodeBlockProps = {
  code: object | string;
  title?: string;
};

export function CodeBlock({ code, title }: CodeBlockProps) {
  const codeString =
    typeof code === "string" ? code : JSON.stringify(code, null, 2);

  return (
    <div className="rounded bg-zinc-50 p-4 dark:bg-zinc-950">
      {title && (
        <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {title}
        </p>
      )}
      <pre className="overflow-x-auto rounded bg-zinc-100 p-3 text-xs dark:bg-zinc-800">
        <code>{codeString}</code>
      </pre>
    </div>
  );
}
