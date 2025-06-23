import { INTERFACES } from "../../utils/data";

const Interfaces = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-25">
      <h2 className="text-center max-w-xl text-gray-900 font-bold text-3xl">
        Interfaces of Sales and Distribution Management System
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {INTERFACES.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="uppercase text-xl font-bold text-gray-900 mt-5">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interfaces;
