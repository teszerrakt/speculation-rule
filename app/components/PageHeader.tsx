import { BackLink } from "@/components/ui/BackLink";

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <BackLink />
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
