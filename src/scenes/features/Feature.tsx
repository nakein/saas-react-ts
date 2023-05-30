type Props = {
  image: JSX.Element;
  title: string;
  description: string;
};

const Feature = ({ image, title, description }: Props) => {
  return (
    <div className="md:w-2/6">
      {image}
      <div className="my-5 p-2">
        <h2 className="text-3xl font-semibold text-black">{title}</h2>
        <p className="mt-5">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
