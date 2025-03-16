import GradientText from "./GradientText";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
