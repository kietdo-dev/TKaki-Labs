import Site from '@/components/Site';
import { SITE_DATA as data } from '@/lib/content';

export default function Page() {
  const product = data.products[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.brand,
      url: siteUrl,
      logo: siteUrl ? `${siteUrl}/assets/logo.png` : '/assets/logo.png',
      telephone: data.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.contact.address,
        addressCountry: 'VN',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description:
        product.description ||
        'Quần short kaki nam TKaki-Labs, được sản xuất bởi xưởng may gia đình.',
      image: product.gallery.map((image) =>
        siteUrl ? `${siteUrl}${image.src}` : image.src
      ),
      brand: { '@type': 'Brand', name: data.brand },
      category: 'Quần short nam',
      ...(product.price != null && {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'VND',
          price: product.price,
          availability: 'https://schema.org/InStock',
        },
      }),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Site />
    </>
  );
}
