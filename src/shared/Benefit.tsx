import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
};

const Benefit = ({ title }: Props) => {
  return (
    <li className="my-2 flex items-center gap-4">
      <CheckCircleIcon className="h-8 w-8 fill-primary-500" />
      <p className="text-black">{title}</p>
    </li>
  );
};

export default Benefit;
