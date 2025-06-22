import { LOGO_ICONS } from "../../utils/data";

const AnimatedLogo = () => {
  return (
    <div className="my-5 overflow-hidden w-full relative">
      <div className="w-[200%] flex animate-marquee">
        {[...LOGO_ICONS, ...LOGO_ICONS].map((icon, index) => (
          <div
            key={index}
            className="flex items-center gap-4 min-w-max px-10 text-slate-400"
          >
            <img src={icon.logo} alt={icon.name} className="w-32 h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
