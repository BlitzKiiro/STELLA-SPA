import cn from "classnames";

const Overlay = ({ menuIsVisible }) => {
  return (
    <div
      className={cn(
        { "h-[100vh]": menuIsVisible },
        "transition-all duration-700",
        "fixed left-0 top-0 w-full h-0 z-10",
        "bg-[#958977]",
        "md:!hidden"
      )}
    ></div>
  );
};

export default Overlay;
