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
      className="choice-container"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: convertHex(choice.colour, 0.25),
        cursor: "pointer",
        border: isSelected ? "5px solid black" : "none",
      }}
      onClick={onClick}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {choice.text}
      </div>
    </div>
  );
}
