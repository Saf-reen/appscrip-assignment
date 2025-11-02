import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-none">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 min-h-[40px]">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">
              <a href="#" className="hover:underline underline-offset-2">
                Sign in
              </a>
              {" "}or{" "}
              <a href="#" className="hover:underline underline-offset-2">
                Create an account
              </a>
              {" "}to see pricing
            </p>
          </div>

          <div className="pt-1">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
