import { MainText } from "~/components/typography/main-text.component";

type BenefitCardProps = {
  title: string;
  icon: string;
  value: string;
  description: string;
};

export function BenefitCardWithIcon({
  title,
  icon,
  value,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-gray-10 px-6 py-10 rounded-3xl h-[350px] flex flex-col justify-between">
      <div className="flex items-center mb-16 text-xl gap-x-2">
        <div>{icon}</div>
        <MainText text={title} />
      </div>
      <div>
        <p className="mb-2 font-bold text-6xl text-secondary-100">{value}</p>
        <MainText text={description} />
      </div>
    </div>
  );
}
