import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterSection {
  id: string;
  title: string;
  options: string[];
}

const filterSections: FilterSection[] = [
  {
    id: "customizable",
    title: "CUSTOMIZABLE",
    options: [],
  },
  {
    id: "ideal-for",
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    id: "occasion",
    title: "OCCASION",
    options: ["Casual", "Formal", "Party", "Sports"],
  },
  {
    id: "work",
    title: "WORK",
    options: ["Office", "Remote", "Hybrid"],
  },
  {
    id: "fabric",
    title: "FABRIC",
    options: ["Cotton", "Polyester", "Silk", "Wool"],
  },
  {
    id: "segment",
    title: "SEGMENT",
    options: ["Premium", "Budget", "Luxury"],
  },
  {
    id: "suitable-for",
    title: "SUITABLE FOR",
    options: ["Summer", "Winter", "All Season"],
  },
  {
    id: "raw-materials",
    title: "RAW MATERIALS",
    options: ["Organic", "Synthetic", "Recycled"],
  },
  {
    id: "pattern",
    title: "PATTERN",
    options: ["Solid", "Printed", "Striped", "Checked"],
  },
];

interface ProductFiltersProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ProductFilters = ({ isOpen = true, onClose }: ProductFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["ideal-for"])
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <aside
      className={`
        w-full lg:w-filter
        ${isOpen ? "block" : "hidden lg:block"}
        transition-all duration-300
      `}
    >
      <div className="sticky top-24 space-y-6 border-r pr-6 pb-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Filters</h2>
          </div>
        </div>

        <Separator />

        {/* Filter Sections */}
        <div className="space-y-4">
          {filterSections.map((section) => (
            <div key={section.id} className="space-y-3">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-sm font-medium">{section.title}</h3>
                {section.options.length > 0 &&
                  (expandedSections.has(section.id) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </button>

              {expandedSections.has(section.id) && section.options.length > 0 && (
                <div className="space-y-2 pl-2">
                  <div className="text-xs text-muted-foreground mb-2">All</div>
                  {section.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox id={`${section.id}-${option}`} />
                      <Label
                        htmlFor={`${section.id}-${option}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              <Separator className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
