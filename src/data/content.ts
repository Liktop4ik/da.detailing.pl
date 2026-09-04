export type LocationGroup = {
  state: string;
  counties: string[];
};

export const locationGroups: LocationGroup[] = [
  {
    state: 'California',
    counties: [
      'Los Angeles County',
      'Orange County',
      'San Diego County',
      'Santa Clara County',
      'San Mateo County',
      'Alameda County',
      'San Francisco County',
      'Sacramento County',
    ],
  },
  {
    state: 'Texas',
    counties: ['Travis County'],
  },
  {
    state: 'Florida',
    counties: [
      'Broward County',
      'Miami-Dade County',
      'Palm Beach County',
      'Saint Lucie County',
      'Hillsborough County',
      'Orange County',
      'Lake County',
      'Seminole County',
      'Osceola County',
    ],
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What's the difference between da.detailing and local car washes?",
    answer:
      "Choosing da.detailing means enjoying unparalleled convenience \u2014 imagine having a professional come directly to your home or office to wash your car. Our professionals aren't just any detailers; they've been thoroughly vetted, demonstrating their exceptional skills in person before joining our platform. Fully equipped and insured, they're ready to deliver top-notch service wherever you are.",
  },
  {
    question: 'Do I need to have any equipment?',
    answer:
      "No, you don't! Our detailers arrive fully prepared with all the necessary supplies, including a generator for power and a water supply.",
  },
  {
    question: 'Can you wash the car in any location?',
    answer:
      'To ensure the best service, your car should be parked in an easily accessible location. Please note, that we do not service cars in public parking lots (e.g., grocery stores, malls). Suitable locations include an outdoor parking spot with ample space, an indoor garage or parking area with service authorization, or your home\u2019s driveway. For indoor parking services, please provide any necessary access details (like gate codes) when booking.',
  },
  {
    question: 'How do I pay for the service?',
    answer:
      'da.detailing operates on a cashless basis for your convenience and security. Payments can be effortlessly made through our app or website, using a debit or credit card. Our platform is designed to be secure and user-friendly, ensuring a smooth transaction process.',
  },
  {
    question: 'How will you access the car?',
    answer:
      'Upon arrival, the detailer will contact you to coordinate access to your vehicle. You can either meet the detailer in person or provide specific instructions for vehicle access when booking your service.',
  },
  {
    question: 'What if I have more than one car?',
    answer:
      'Easily manage multiple vehicles with our service! Simply use the multiple-car feature on our app or website to schedule services for all your vehicles, ensuring the same detailer takes care of each one.',
  },
  {
    question: "I'm not sure what I/my car needs: is there anyone I can talk to?",
    answer:
      'Our dedicated customer support team is here to assist you in selecting the perfect package for your car\u2019s needs. Feel free to reach out at (855) 210-1337 or email support@da.detailing for personalized advice and support.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Everything was done without water, hand polished and detailed. I can\u2019t believe how convenient it was to get that new car smell!',
    name: 'John',
    location: 'Los Angeles, CA',
  },
  {
    quote:
      'I highly recommend da.detailing to anyone looking for a convenient and top-quality car cleaning service. I\u2019ll definitely be a repeat customer.',
    name: 'Josh',
    location: 'Miami, FL',
  },
];

export type Repair = {
  name: string;
  blurb: string;
};

export const repairs: Repair[] = [
  {
    name: 'Paintless Dent Repair',
    blurb: 'Remove minor dents and dings without affecting your factory paint finish.',
  },
  {
    name: 'Titanium Gloss',
    blurb: 'Multi-stage paint correction and ceramic coating for a flawless showroom shine.',
  },
  {
    name: 'Window Tinting',
    blurb: 'Premium tint films that cut heat, glare, and UV while elevating your car\u2019s look.',
  },
  {
    name: 'Wheel & Rim Repair',
    blurb: 'Fix scratches, scrapes, and curb damage so your wheels look brand new again.',
  },
];
