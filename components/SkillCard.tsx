interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({
  name,
  description,
}: SkillCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}