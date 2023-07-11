const SectionTitle = ({ title }) => {
  return (
    <div className="text-primary font-bold text-center space-y-6">
      <h2 className="text-4xl md:text-6xl font-primary">{title}</h2>
      <span className="block w-12 border-b-2 mx-auto"></span>
    </div>
  );
};

export default SectionTitle;
