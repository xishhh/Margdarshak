export default function TutorialStepCard({ image, text, stepLabel, totalLabel }) {
  return (
    <section className="space-y-4">
      <div className="surface-card overflow-hidden rounded-xl p-3 md:p-4">
        <div className="overflow-hidden rounded-[1.75rem] bg-surface-container-high">
          <img src={image} alt={stepLabel} className="aspect-[9/10] w-full object-cover md:aspect-[9/14]" />
        </div>
      </div>

      <div className="rounded-xl bg-surface-container-low p-5 md:p-6">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">{totalLabel}</p>
        <p className="text-[1.42rem] font-medium leading-relaxed text-on-surface md:text-[1.65rem]">{text}</p>
      </div>
    </section>
  );
}
