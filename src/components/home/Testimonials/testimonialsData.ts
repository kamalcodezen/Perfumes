import customer1 from "../../../../public/images/customer-1.jpg";
import customer2 from "../../../../public/images/customer-2.jpg";
import customer3 from "../../../../public/images/customer-3.jpg";

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    location: "New York, USA",
    image: customer1,
    rating: 5,
    review:
      "RossWell perfumes exceeded my expectations. Elegant fragrance and premium packaging.",
  },
  {
    id: 2,
    name: "Daniel Carter",
    location: "London, UK",
    image: customer2,
    rating: 5,
    review:
      "The fragrance lasts all day. Amazing customer service and fast delivery.",
  },
  {
    id: 3,
    name: "Sophia Miller",
    location: "Paris, France",
    image: customer3,
    rating: 5,
    review:
      "Absolutely love the quality. RossWell has become my favorite perfume store.",
  },
];
