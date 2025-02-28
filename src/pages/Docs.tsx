import DocLinks from "@/components/DocLinks";
import Documentation from "@/components/Documentation";

const Docs = () => {
  return (
    <>
      <div className="grid lg:flex">
        <DocLinks />
        <Documentation />
      </div>
    </>
  );
};

export default Docs;
