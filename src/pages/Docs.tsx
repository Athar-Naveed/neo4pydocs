
import DocLinks from "@/components/DocLinks";
import Documentation from "@/components/Documentation";

const Docs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <DocLinks />
          </div>
          <div className="lg:w-3/4">
            <Documentation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
