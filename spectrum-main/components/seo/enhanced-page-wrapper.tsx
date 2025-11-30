import React from "react";
import Script from "next/script";
import { TableOfContents } from "./table-of-contents";
import { RelatedComponents } from "./related-components";
import { ComponentInfoSection } from "./component-info-section";
import { ComponentComparison } from "./component-comparison";
import { ComponentFAQ } from "./component-faq";
import { getComponentMetadata } from "@/lib/component-metadata";
import { getRelatedComponents, generateComponentStructuredData, generateFAQStructuredData } from "@/lib/seo-utils";

interface EnhancedPageWrapperProps {
  children: React.ReactNode;
  componentName?: string;
  showTOC?: boolean;
  showRelated?: boolean;
  showComparison?: boolean;
  showFAQ?: boolean;
  showFeatures?: boolean;
}

export function EnhancedPageWrapper({
  children,
  componentName,
  showTOC = true,
  showRelated = true,
  showComparison = true,
  showFAQ = true,
  showFeatures = true,
}: EnhancedPageWrapperProps) {
  const metadata = componentName ? getComponentMetadata(componentName) : undefined;
  
  // Get related components
  const relatedComponentsList = componentName 
    ? getRelatedComponents(componentName).map(comp => ({
        ...comp,
        description: getComponentMetadata(comp.label.toLowerCase())?.description || undefined,
      }))
    : [];

  // Generate structured data
  const componentStructuredData = metadata 
    ? generateComponentStructuredData({
        name: metadata.name,
        description: metadata.description,
        category: metadata.category,
        features: metadata.features,
      })
    : null;

  const faqStructuredData = metadata?.faqs 
    ? generateFAQStructuredData(metadata.faqs)
    : null;

  return (
    <>
      {/* Structured Data for SEO */}
      {componentStructuredData && (
        <Script
          id="component-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(componentStructuredData),
          }}
        />
      )}
      {faqStructuredData && (
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      )}

      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_250px]">
        <div className="mx-auto w-full min-w-0">
          {children}

          {/* SEO Enhancement Sections */}
          {metadata && showFeatures && (
            <ComponentInfoSection
              componentName={metadata.name}
              features={metadata.features}
              useCases={metadata.useCases}
              advantages={metadata.advantages}
            />
          )}

          {metadata && showComparison && metadata.comparison && (
            <ComponentComparison
              componentName={metadata.name}
              comparisons={metadata.comparison}
            />
          )}

          {metadata && showFAQ && (
            <ComponentFAQ componentName={metadata.name} faqs={metadata.faqs} />
          )}

          {showRelated && relatedComponentsList.length > 0 && (
            <RelatedComponents components={relatedComponentsList} />
          )}
        </div>

        {/* Table of Contents - Right Sidebar */}
        {showTOC && <TableOfContents />}
      </main>
    </>
  );
}

