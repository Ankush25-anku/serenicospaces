import LuxuryGallery from "@/components/LuxuryGallery";

const galleries = {
  "Luxury-private-sanctuaries": [
    "/images/gallery/bedroom1.webp",
    "/images/gallery/bedroom2.webp",
    "/images/gallery/bedroom3.webp",
    "/images/gallery/bedroom4.webp",
    "/images/gallery/bedroom5.webp",
    "/images/gallery/bedroom6.webp",
    "/images/gallery/bedroom7.webp",
    "/images/gallery/bedroom8.webp",
    "/images/gallery/bedroom9.webp",
    "/images/gallery/bedroom10.webp",
    "/images/gallery/bedroom11.webp",
    "/images/gallery/bedroom12.webp",
    "/images/gallery/bedroom13.webp",
  ],

  "Luxury-modular-kitchens": [
    "/images/gallery/retail1.webp",
    "/images/gallery/retail2.webp",
    "/images/gallery/retail3.webp",
    "/images/gallery/retail4.webp",
    "/images/gallery/retail5.webp",
    "/images/gallery/retail6.webp",
  ],

  "Strategic-business-retail-spaces": [
    "/images/gallery/kitchen1.webp",
    "/images/gallery/kitchen2.webp",
    "/images/gallery/kitchen3.webp",
    "/images/gallery/kitchen4.webp",
    "/images/gallery/kitchen5.webp",
    "/images/gallery/kitchen6.webp",
  ],

  // NEW GALLERY ADD HERE

  "Sacred-spaces": [
    "/images/gallery/sacred1.webp",
    "/images/gallery/sacred2.webp",
    "/images/gallery/sacred3.webp",
    "/images/gallery/sacred4.webp",

  ],
};

export default async function ProjectGallery({ params }) {
  const { slug } = await params;

  const images = galleries[slug];

  if (!images) {
    return <div>Gallery not found</div>;
  }

  return <LuxuryGallery images={images} title={slug.replaceAll("-", " ")} />;
}
