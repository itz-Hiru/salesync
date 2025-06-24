import LOGO from "../../assets/logo.png";
import { OFFICE_INFORMATIONS, PRODUCTS, QUICK_LINKS } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="px-5 md:px-16 lg-px-24 xl:px-32 pt-8 w-full bg-cyan-100/40 mt-16">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 md:gap-30 border-b border-gray-500/30 pb-6">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10">
          <div className="flex flex-col md:max-w-96">
            <img src={LOGO} alt="website-logo" className="w-15" />
            <p className="mt-6 text-sm text-gray-600">
              A platform benefiting you sales team and enhancing your
              distribution management system.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-[18px]">Quick Links</h3>
            <ul className="mt-6 list-disc">
              {QUICK_LINKS.map((quickLink, index) => (
                <li
                  key={index}
                  className="mb-1 last:mb-0 text-gray-600 hover:underline transition-all duration-300"
                >
                  <a href={quickLink.link} className="text-sm">
                    {quickLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full gap-10">
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-[18px]">
              Salesync Products
            </h3>
            <ul className="mt-6 list-disc last:mb-0">
              {PRODUCTS.map((product, index) => (
                <li
                  key={index}
                  className="mb-1 last:mb-0 text-gray-600 text-sm"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-[18px] mb-6">
              Office Information
            </h3>
            {OFFICE_INFORMATIONS.map((information, index) => (
              <div
                key={index}
                className="flex gap-3 mb-2 last:mb-0 items-center"
              >
                <information.icon className="text-gray-700" />
                <p className="text-gray-600 text-sm">
                  {information.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="pt-5 text-center text-xs md:text-sm pb-5 text-gray-600">
        &copy;Copyright {new Date().getFullYear()} Salesync. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
