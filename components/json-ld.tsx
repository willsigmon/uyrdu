export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    name: "Uniquely You! Raleigh Metro",
    url: "https://uyrdu.com",
    description:
      "A free monthly magazine celebrating the disability community across NC's Triangle region — Wake, Durham, Orange, Johnston, and Chatham counties.",
    publisher: {
      "@type": "Organization",
      name: "The N2 Company",
      url: "https://n2co.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham Triangle, NC",
    },
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
