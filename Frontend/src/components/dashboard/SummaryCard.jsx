import SummaryCard from "../common/SummaryCard";

function SummaryCards({ cards }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          value={card.value}
          status={card.status}
          trend={card.trend}
        />
      ))}
    </div>
  );
}

export default SummaryCards;