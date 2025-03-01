import Chat from "@/components/chatbot";
import DocLinks from "@/components/DocLinks";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Docs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8 my-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <DocLinks />
          </div>
          <div className="lg:w-3/4">
            <Documentation />
          </div>
        </div>
      </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default Docs;
