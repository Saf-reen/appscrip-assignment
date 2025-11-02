import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display mb-6">
              SKILLS
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering artisans and craftspeople with traditional skills
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Handcrafted Excellence</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We work with skilled artisans who bring generations of expertise to every piece. 
                  Each product tells a story of craftsmanship, dedication, and traditional techniques 
                  passed down through families.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Sustainable Practices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our artisans use eco-friendly materials and time-honored methods that respect 
                  both tradition and the environment. We believe in creating products that are 
                  as sustainable as they are beautiful.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Weaving & Textiles</h2>
                <p className="text-muted-foreground leading-relaxed">
                  From traditional handloom weaving to intricate embroidery, our textile artisans 
                  create stunning fabrics using techniques that have been perfected over centuries.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Jewelry Making</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Master jewelers craft each piece with precision and artistry, combining 
                  traditional metalworking techniques with contemporary design sensibilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
