import { convertHex } from "@/common/helpers/convertHex";

export default function ChoiceSquare({
  choice,
  onClick,
  isSelected = false,
}: {
  choice: any;
  onClick: any;
  isSelected?: boolean;
}) {
  return (
    <div
      className="choice-container w-full h-full cursor-pointer flex justify-center items-center"
      style={{
        backgroundColor: convertHex(choice.colour, isSelected ? 0.6 : 0.25),
        border: isSelected ? "5px solid black" : "none",
      }}
      onClick={onClick}
    >
      <div className="text-4xl font-bold text-center">{choice.text}</div>
    </div>
  );
}
