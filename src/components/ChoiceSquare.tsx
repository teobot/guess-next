export default function ChoiceSquare({
  choice,
  onClick,
  isSelected = false,
  index,
}: {
  choice: any;
  onClick: any;
  isSelected?: boolean;
  index: number;
}) {
  const choiceColor = [
    {
      selected: "bg-red-500",
      unselected: "bg-red-300/75",
    },
    {
      selected: "bg-blue-500",
      unselected: "bg-blue-300/75",
    },
    {
      selected: "bg-green-500",
      unselected: "bg-green-300/75",
    },
    {
      selected: "bg-yellow-500",
      unselected: "bg-yellow-300/75",
    },
  ];

  return (
    <div
      className={`choice-container w-full h-full cursor-pointer flex justify-center items-center ${
        isSelected ? choiceColor[index].selected : choiceColor[index].unselected
      }`}
      style={{
        border: isSelected ? "5px solid black" : "none",
      }}
      onClick={onClick}
    >
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center drop-shadow-2xl text-pretty mx-2">
        {choice.text}
      </div>
    </div>
  );
}
