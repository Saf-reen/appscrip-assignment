import { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch products from fakestoreapi
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load products. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Add JSON-LD structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.title,
          "image": product.image,
          "description": product.description,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD"
          }
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [products]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setFilterOpen(!filterOpen)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display mb-4">
              DISCOVER OUR PRODUCTS
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </section>

        {/* Filters and Sort Bar */}
        <section className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{products.length} ITEMS</span>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  {showFilters ? (
                    <>
                      <ChevronLeft className="h-4 w-4" />
                      HIDE FILTER
                    </>
                  ) : (
                    <>
                      <ChevronRight className="h-4 w-4" />
                      SHOW FILTER
                    </>
                  )}
                </button>
              </div>

              <Select defaultValue="recommended">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">RECOMMENDED</SelectItem>
                  <SelectItem value="newest">NEWEST FIRST</SelectItem>
                  <SelectItem value="popular">POPULAR</SelectItem>
                  <SelectItem value="price-high">PRICE: HIGH TO LOW</SelectItem>
                  <SelectItem value="price-low">PRICE: LOW TO HIGH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <ProductFilters isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
            )}

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              <ProductGrid products={products} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
