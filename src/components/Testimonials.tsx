
import React from 'react';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Film Composer",
    quote: "GOT CHOIRS has transformed my scoring process. The quality and flexibility of the choir sounds are unparalleled, allowing me to create emotional depth that was previously impossible.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    role: "Music Producer",
    quote: "As someone who works across multiple genres, I need versatile tools. GOT CHOIRS delivers with its extensive library and intuitive controls. My go-to for all vocal ensemble needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Thomas Wright",
    role: "Sound Designer",
    quote: "The attention to detail in GOT CHOIRS is remarkable. Each articulation feels authentic, and the different choir types give me endless creative possibilities.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "Game Audio Director",
    quote: "We've integrated GOT CHOIRS into our workflow for our latest AAA title, and it's been a game-changer. The flexibility and quality have elevated our audio experience.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-got-dark/60 backdrop-blur-sm border border-got-green/5 hover:border-got-green/20 rounded-xl p-6 transition-all h-full flex flex-col">
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <StarIcon 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? "text-got-yellow" : "text-got-light/20"} 
            fill={i < testimonial.rating ? "#F5A623" : "none"} 
          />
        ))}
      </div>
      
      <blockquote className="text-got-light/80 italic mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-got-light/60 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-got-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            What <span className="text-got-green">Professionals</span> Are Saying
          </h2>
          <p className="text-got-light/70">
            Industry experts and creators around the world trust GOT CHOIRS for their productions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
