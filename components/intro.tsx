type Props = {
  pageName: string;
};
//className="text-base text-green-600 font-semibold tracking-wide uppercase"
const Intro = ({ pageName }: Props) => {
  return (
    <section className="flex-col mflex-row flex items-center md:justify-between  mb-16 md:mb-12 text-green-600 font-semibold text-6xl">
      <h4 className="text-center la:text-lg">
        {pageName}
      </h4>
    </section>
  );
};

export default Intro;
