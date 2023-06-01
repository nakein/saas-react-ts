import Logo from "@/assets/Logo.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-5">
      <div className="justify-content mx-auto mb-10 w-5/6 gap-16 md:flex">
        <div className="md:basis-11/12">
          <img alt="logo" src={Logo} className="mb-5" width="155" height="40" />
          <p className="mb-5">Get started now, try our product</p>
          <label className="relative block md:w-3/5">
            <span className="absolute inset-y-0 right-0 flex items-center">
              <button aria-label="Email sent">
                <ArrowRightCircleIcon className="h-16 w-16 fill-primary-300"></ArrowRightCircleIcon>
              </button>
            </span>
            <input
              type="email"
              className="mb-5 block w-full rounded-full border bg-secondary-400 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email here"
            />
          </label>
        </div>
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-col space-y-3 md:basis-1/3">
            <p className="mb-5 text-white">Support</p>
            <a href="#">Help center</a>
            <a href="#">Account information</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
          </div>
          <div className="flex flex-col space-y-3 md:basis-1/3">
            <p className="mb-5 text-white">Help and Solution</p>
            <a href="#">Talk to support</a>
            <a href="#">Support docs</a>
            <a href="#">System status</a>
            <a href="#">Contact us</a>
          </div>
          <div className="flex flex-col space-y-3 md:basis-1/3">
            <p className="mb-5 text-white">Product</p>
            <a href="#">Update</a>
            <a href="#">Security</a>
            <a href="#">Beta test</a>
            <a href="#">Pricing product</a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-5/6 justify-between py-6 md:flex">
        <p className="text-white">
          © 2022 Biccas Inc. Copyright and rights reserved
        </p>
        <p className="text-white">
          <a href="#">Terms and conditions</a> • <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
