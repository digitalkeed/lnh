const items = [
  "Amazon Growth",
  "Brand Protection",
  "Listing Optimization",
  "Distribution",
  "Advertising Campaigns",
  "Sales Analytics",
  "Customer Service",
  "Alabaster, AL",
];

export function Marquee() {
  const row = (
    <>
      {items.map((item) => (
        <span key={item} className="font-serif text-base font-light tracking-[0.2em] uppercase text-cream/70 shrink-0">
          {item}
        </span>
      ))}
      <span className="text-gold mx-4">✦</span>
    </>
  );

  return (
    <div className="border-t border-b border-[var(--line)] overflow-hidden py-5 bg-ink">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}
