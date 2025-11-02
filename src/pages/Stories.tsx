import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stories = () => {
  const stories = [
    {
      title: "The Weavers of Tradition",
      excerpt: "Meet the families keeping ancient weaving techniques alive in modern times.",
      date: "March 15, 2024"
    },
    {
      title: "Sustainable Fashion Revolution",
      excerpt: "How traditional crafts are leading the way in sustainable fashion.",
      date: "March 10, 2024"
    },
    {
      title: "Artisan Spotlight: Master Jeweler",
      excerpt: "A day in the life of our master jeweler crafting timeless pieces.",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display mb-6">
              STORIES
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the people and traditions behind our products
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {stories.map((story, index) => (
                <article key={index} className="border-b pb-12 last:border-0">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                      {story.date}
                    </p>
                    <h2 className="text-3xl font-bold font-display hover:text-muted-foreground transition-colors cursor-pointer">
                      {story.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {story.excerpt}
                    </p>
                    <button className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
