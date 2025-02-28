import { Github, Slack, Twitter, Book } from "lucide-react";

const communityLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub",
    description:
      "Contribute to the library, report issues, or explore the source code.",
    href: "https://github.com",
    linkText: "View Repository",
  },
  {
    icon: <Slack className="h-5 w-5" />,
    title: "Community Chat",
    description:
      "Join our Slack channel to connect with other Neo4py users and developers.",
    href: "#",
    linkText: "Join the Conversation",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    title: "Twitter",
    description: "Follow us for updates, tips, and community highlights.",
    href: "#",
    linkText: "Follow @neo4py",
  },
  {
    icon: <Book className="h-5 w-5" />,
    title: "Blog",
    description: "Read about best practices, case studies, and new features.",
    href: "#",
    linkText: "Read our Blog",
  },
];

const Community = () => {
  return (
    <section
      id="community"
      className="py-20 bg-neo4py-super-light relative overflow-hidden"
    >
      {/* Purple blob in the background */}
      <div
        className="gradient-blur h-[300px] w-[300px] bottom-[-150px] right-[-150px]"
        aria-hidden="true"
      />

      <div className="neo4py-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-neo4py/20 text-neo4py-dark text-sm font-medium mb-4">
            <span>Join Our Community</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Connect with Neo4py Users
          </h2>

          <p className="text-lg text-muted-foreground">
            Join a growing community of developers building amazing things with
            Neo4py. Get help, share your projects, and contribute to the future
            of the library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {communityLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-neo4py/10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-neo4py-super-light text-neo4py p-3 rounded-lg">
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold">{link.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{link.description}</p>
              <a
                href={link.href}
                className="text-neo4py hover:text-neo4py-dark font-medium inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.linkText}
                <span className="ml-1 text-xs">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-between py-4 px-6 bg-white rounded-lg border border-neo4py/10 shadow-sm">
            <span className="text-muted-foreground mr-4">
              Star us on GitHub:
            </span>
            <div className="flex items-center space-x-2">
              <div className="font-mono text-sm bg-gray-100 py-1 px-3 rounded-md">
                pip install neo4py
              </div>
              <a
                href="https://github.com"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium 
                  bg-neo4py hover:bg-neo4py-dark text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Star
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
