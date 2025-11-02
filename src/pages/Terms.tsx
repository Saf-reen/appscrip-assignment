import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display mb-6">
              TERMS & CONDITIONS
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: March 2024
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on our 
                  website for personal, non-commercial transitory viewing only. This is the grant 
                  of a license, not a transfer of title.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product descriptions and pricing. However, we do not 
                  warrant that product descriptions, pricing, or other content is accurate, complete, 
                  reliable, current, or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Purchases and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All purchases are subject to product availability. We reserve the right to refuse 
                  any order placed with us. We may require additional verification or information 
                  before accepting any order.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please review our Return Policy for detailed information about returns and refunds. 
                  Due to the handcrafted nature of our products, some items may not be eligible for return.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall we or our suppliers be liable for any damages arising out of the 
                  use or inability to use the materials on our website, even if we or an authorized 
                  representative has been notified of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may revise these terms of service at any time without notice. By using this 
                  website, you are agreeing to be bound by the current version of these terms of service.
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

export default Terms;
