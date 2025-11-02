import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your products unique?",
      answer: "All our products are handcrafted by skilled artisans using traditional techniques passed down through generations. Each piece is unique and tells a story of craftsmanship and cultural heritage."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically arrive within 5-7 business days. International shipping takes 10-14 business days. You'll receive tracking information once your order ships."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. Items must be unused and in original condition. Due to the handcrafted nature of some products, certain items may not be eligible for return. Please contact us for specific details."
    },
    {
      question: "Do you offer custom orders?",
      answer: "Yes! We work with artisans to create custom pieces. Contact us with your requirements, and we'll connect you with the right craftsperson to bring your vision to life."
    },
    {
      question: "How do you ensure fair trade practices?",
      answer: "We work directly with artisan cooperatives and ensure fair compensation for all craftspeople. We maintain long-term relationships with our artisans and are committed to sustainable, ethical practices."
    },
    {
      question: "Are your products eco-friendly?",
      answer: "Yes, we prioritize sustainability. Our artisans use natural, eco-friendly materials whenever possible, and traditional production methods that have minimal environmental impact."
    },
    {
      question: "How do I care for handcrafted items?",
      answer: "Care instructions vary by product. Generally, handcrafted textiles should be hand-washed or dry-cleaned, and jewelry should be stored away from moisture. Specific care instructions come with each product."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International customers are responsible for any customs duties or import taxes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="border-b">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 p-8 border rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Please reach out to our customer support team.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
