interface TgasProps {
  tagTypes:
    | "Productivity"
    | "Tech & Tools"
    | "Mindset"
    | "Learning & Skills"
    | "Workflows"
    | "Inspiration";
}

const Tags = (props: TgasProps) => {
  return (
    <div
      className="px-2 sm:px-3 py-1 text-sm sm:text-base md:text-lg bg-blue-100 rounded-2xl text-blue-500 whitespace-nowrap"
    >
      #{props.tagTypes}
    </div>
  );
};

export default Tags;
