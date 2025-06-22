import { USECASES } from "../../utils/data";

const UseCases = () => {
  return (
    <section
      id="usecases"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-25"
    >
      <h2 className="text-4xl font-bold text-gray-900">
        What makes Salesync different?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {USECASES.map((usecase, index) => (
          <div key={index} className="flex flex-col gap-3 rounded-lg">
            <div className="w-full h-56 rounded-lg overflow-hidden">
              <img
                src={usecase.image}
                alt={usecase.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h4 className="text-center text-slate-950 text-xl font-bold">
              {usecase.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
