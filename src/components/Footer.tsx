import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 uppercase">BE THE FIRST TO KNOW</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sign up for updates from metta muse.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-1 px-4 py-2 text-sm border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors uppercase">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">metta muse</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-foreground transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-foreground transition-colors">
                  Artisans
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  Boutiques
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  Orders & Shipping
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Join/Login as a Seller
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  Payment & Pricing
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-foreground transition-colors">
                  Return & Refunds
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">FOLLOW US</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">metta muse ACCEPTS</h4>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 border border-border rounded text-xs font-medium">
                GPay
              </div>
              <div className="px-3 py-1 border border-border rounded text-xs font-medium">
                Mastercard
              </div>
              <div className="px-3 py-1 border border-border rounded text-xs font-medium">
                PayPal
              </div>
              <div className="px-3 py-1 border border-border rounded text-xs font-medium">
                Amex
              </div>
              <div className="px-3 py-1 border border-border rounded text-xs font-medium">
                Apple Pay
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <Separator className="mb-6" />
        <div className="text-center text-sm text-muted-foreground">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
