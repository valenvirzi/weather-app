import useFormatDate from "../hooks/useFormatDate";

interface DayHourItemProps {
  dateText: string;
}

const DayHourItem: React.FC<DayHourItemProps> = ({ dateText }) => {
  const formattedDate = useFormatDate(dateText);

  return (
    <div className="flex max-w-8 flex-col items-center gap-1">
      <span className="text-xs md:text-sm">{formattedDate}</span>
      <span className="text-sm md:text-base">{dateText.slice(11, 16)}</span>
    </div>
  );
};

export default DayHourItem;
