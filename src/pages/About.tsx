import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display mb-6">
              ABOUT US
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connecting artisans with conscious consumers worldwide
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe in the power of authentic craftsmanship and sustainable practices. 
                Our mission is to create a platform where traditional artisans can showcase 
                their skills and connect with customers who value quality, authenticity, and 
                ethical production.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded with a vision to preserve traditional crafts while supporting 
                sustainable livelihoods, we've built a community of over 500 artisans 
                across multiple regions. Each product in our collection carries the 
                heritage and expertise of skilled craftspeople.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">Our Values</h2>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span><strong className="text-foreground">Authenticity:</strong> Every product is handcrafted by skilled artisans</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span><strong className="text-foreground">Sustainability:</strong> We prioritize eco-friendly materials and practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span><strong className="text-foreground">Fair Trade:</strong> Artisans receive fair compensation for their work</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-foreground">•</span>
                  <span><strong className="text-foreground">Quality:</strong> We maintain the highest standards in every piece</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
