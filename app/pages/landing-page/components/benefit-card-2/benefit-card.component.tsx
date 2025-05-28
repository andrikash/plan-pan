import { H4Title } from "~/components/typography/h4-title.component";
import { MainText } from "~/components/typography/main-text.component";

type BenefitCardProps = {
  title: string;
  description: string;
};

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="bg-gray-10 p-6 rounded-4xl flex flex-col gap-y-4">
      <H4Title title={title} className="text-secondary-100" />
      <MainText text={description} className="text-gray-100" />
    </div>
  );
}
