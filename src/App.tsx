import { motion } from "motion/react";
import { Bike, Palette, Brush, Zap, Star, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    id: "draw",
    title: "Hand Drawing",
    description: "Intricate pen and ink illustrations directly on your frame.",
    icon: <Brush className="w-8 h-8" />,
    price: "From $150",
    image: "https://picsum.photos/seed/bike-draw/600/400"
  },
  {
    id: "paint",
    title: "Fine Painting",
    description: "Detailed brushwork, patterns, and custom color palettes.",
    icon: <Palette className="w-8 h-8" />,
    price: "From $250",
    image: "https://picsum.photos/seed/bike-paint/600/400"
  },
  {
    id: "spray",
    title: "Spray Art",
    description: "Graffiti style, stencils, and bold street-art aesthetics.",
    icon: <Zap className="w-8 h-8" />,
    price: "From $200",
    image: "https://picsum.photos/seed/bike-spray/600/400"
  },
  {
    id: "design",
    title: "Digital Design",
    description: "Full wrap designs and conceptual mockups before application.",
    icon: <Bike className="w-8 h-8" />,
    price: "From $100",
    image: "https://picsum.photos/seed/bike-design/600/400"
  }
];

const ARTISTS = [
  {
    name: "Kira 'Ink' Sato",
    specialty: "Hand Drawing",
    rating: 4.9,
    reviews: 124,
    image: "https://picsum.photos/seed/artist1/400/400"
  },
  {
    name: "Marcus Vane",
    specialty: "Spray Art",
    rating: 4.8,
    reviews: 89,
    image: "https://picsum.photos/seed/artist2/400/400"
  },
  {
    name: "Elena Rossi",
    specialty: "Fine Painting",
    rating: 5.0,
    reviews: 56,
    image: "https://picsum.photos/seed/artist3/400/400"
  }
];

export default function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);

  const handleBook = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsBooking(true);
    setBookingStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-brutal-black px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brutal-black p-1">
            <Bike className="text-neon-green w-8 h-8" />
          </div>
          <span className="font-display text-3xl uppercase tracking-tighter">CanvasBike</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm uppercase font-bold">
          <a href="#services" className="hover:text-neon-green transition-colors">Services</a>
          <a href="#artists" className="hover:text-neon-green transition-colors">Artists</a>
          <a href="#how-it-works" className="hover:text-neon-green transition-colors">Process</a>
        </div>
        <button className="brutal-btn py-2 text-sm">Get Started</button>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white border-b-2 border-brutal-black">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display uppercase leading-tight mb-8">
              <span className="text-neon-green block text-4xl md:text-6xl mb-2">Your Bike</span>
              <span className="text-neon-green bg-brutal-black px-2 text-5xl md:text-8xl inline-block">Is A Canvas</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
              Hire world-class artists to customize your ride at your doorstep. From graffiti stencils to fine-line ink.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="brutal-btn">Book an Artist</button>
              <button className="brutal-border bg-white px-6 py-3 font-display text-xl uppercase hover:bg-gray-50">View Gallery</button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="brutal-border rotate-3 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/hero-bike/800/600" 
                alt="Customized Bike" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 brutal-border bg-neon-green p-4 -rotate-2 hidden md:block">
              <p className="font-mono font-bold uppercase text-sm">Featured: 'Neon Pulse' by Marcus Vane</p>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="bg-brutal-black py-4 overflow-hidden border-t-2 border-brutal-black">
          <div className="marquee-track">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="text-white font-display text-4xl uppercase whitespace-nowrap">Spray Paint</span>
                <span className="text-neon-green font-display text-4xl uppercase">★</span>
                <span className="text-white font-display text-4xl uppercase whitespace-nowrap">Hand Drawn</span>
                <span className="text-neon-green font-display text-4xl uppercase">★</span>
                <span className="text-white font-display text-4xl uppercase whitespace-nowrap">Custom Design</span>
                <span className="text-neon-green font-display text-4xl uppercase">★</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-6xl uppercase mb-4">Our Services</h2>
              <p className="text-xl max-w-xl">Choose your style. Our artists bring the studio to your garage.</p>
            </div>
            <div className="font-mono text-sm uppercase font-bold bg-white brutal-border p-2">
              4 Styles Available
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white brutal-border group"
              >
                <div className="h-48 overflow-hidden border-b-2 border-brutal-black">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-neon-green w-12 h-12 flex items-center justify-center brutal-border mb-4 -mt-12 relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl uppercase mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-mono font-bold">{service.price}</span>
                    <button 
                      onClick={() => handleBook(service.id)}
                      className="font-display uppercase text-sm hover:text-neon-green transition-colors underline underline-offset-4"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-24 px-6 bg-white border-y-2 border-brutal-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-6xl uppercase mb-4">Meet the Artisans</h2>
            <p className="text-xl">Vetted professionals with a passion for two wheels.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {ARTISTS.map((artist, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 rounded-full brutal-border overflow-hidden mx-auto bg-gray-200">
                    <img 
                      src={artist.image} 
                      alt={artist.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-0 right-0 bg-brutal-black text-white p-2 rounded-full brutal-border">
                    <Star className="w-4 h-4 fill-neon-green text-neon-green" />
                  </div>
                </div>
                <h3 className="font-display text-3xl uppercase">{artist.name}</h3>
                <p className="font-mono text-sm uppercase font-bold text-gray-500 mb-2">{artist.specialty}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold">{artist.rating}</span>
                  <span className="text-gray-400">({artist.reviews} reviews)</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 bg-neon-green">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-6xl uppercase mb-16 text-center">The Process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Choose Style", desc: "Select the customization style and share your bike details." },
              { step: "02", title: "Match Artist", desc: "We match you with a local artist who specializes in your style." },
              { step: "03", title: "Home Studio", desc: "The artist comes to your house and transforms your bike on-site." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white brutal-border p-8 relative">
                <span className="font-display text-8xl absolute -top-12 -left-4 opacity-10">{item.step}</span>
                <h3 className="font-display text-3xl uppercase mb-4 relative z-10">{item.title}</h3>
                <p className="text-lg relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brutal-black text-white py-20 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Bike className="text-neon-green w-10 h-10" />
              <span className="font-display text-4xl uppercase">CanvasBike</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Redefining bike customization. We bring the art to you, transforming everyday rides into rolling masterpieces.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl uppercase mb-6 text-neon-green">Links</h4>
            <ul className="space-y-4 font-mono text-sm uppercase">
              <li><a href="#" className="hover:text-neon-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Join as Artist</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl uppercase mb-6 text-neon-green">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL@EXAMPLE.COM" 
                className="bg-transparent border-2 border-white px-4 py-2 w-full font-mono text-sm focus:outline-none focus:border-neon-green"
              />
              <button className="bg-white text-brutal-black px-4 py-2 font-display uppercase hover:bg-neon-green transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs uppercase text-gray-500">
          <p>© 2024 CANVASBIKE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBooking && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brutal-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white brutal-border w-full max-w-2xl overflow-hidden"
          >
            <div className="bg-brutal-black p-6 flex justify-between items-center">
              <h2 className="text-white font-display text-3xl uppercase">
                {bookingStep === 4 ? "Booking Confirmed!" : `Book ${SERVICES.find(s => s.id === selectedService)?.title}`}
              </h2>
              <button onClick={() => setIsBooking(false)} className="text-white hover:text-neon-green">
                <Zap className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              {bookingStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center font-display text-2xl">1</div>
                    <h3 className="font-display text-2xl uppercase">Your Location</h3>
                  </div>
                  <div className="space-y-4">
                    <label className="block font-mono text-sm uppercase font-bold">Street Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text" placeholder="123 BIKE LANE" className="w-full brutal-border pl-12 pr-4 py-3 focus:outline-none focus:ring-2 ring-neon-green" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-sm uppercase font-bold mb-2">City</label>
                        <input type="text" placeholder="ART CITY" className="w-full brutal-border px-4 py-3 focus:outline-none" />
                      </div>
                      <div>
                        <label className="block font-mono text-sm uppercase font-bold mb-2">Zip Code</label>
                        <input type="text" placeholder="12345" className="w-full brutal-border px-4 py-3 focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setBookingStep(2)} className="brutal-btn w-full mt-8">Next Step</button>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center font-display text-2xl">2</div>
                    <h3 className="font-display text-2xl uppercase">Schedule</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Mon, Feb 24', 'Tue, Feb 25', 'Wed, Feb 26', 'Thu, Feb 27'].map(date => (
                      <button key={date} className="brutal-border p-4 hover:bg-neon-green transition-colors text-left group">
                        <Calendar className="w-5 h-5 mb-2 group-hover:text-brutal-black" />
                        <span className="font-bold block">{date}</span>
                        <span className="text-xs text-gray-500">Available</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setBookingStep(1)} className="brutal-border px-6 py-3 font-display uppercase">Back</button>
                    <button onClick={() => setBookingStep(3)} className="brutal-btn flex-1">Next Step</button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center font-display text-2xl">3</div>
                    <h3 className="font-display text-2xl uppercase">Bike Details</h3>
                  </div>
                  <textarea 
                    placeholder="TELL US ABOUT YOUR BIKE (BRAND, MODEL, COLOR) AND YOUR VISION FOR THE DESIGN..." 
                    className="w-full brutal-border p-4 h-32 focus:outline-none"
                  ></textarea>
                  <div className="bg-gray-50 p-4 brutal-border">
                    <div className="flex justify-between font-bold mb-2">
                      <span>Service:</span>
                      <span>{SERVICES.find(s => s.id === selectedService)?.title}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl text-neon-green bg-brutal-black px-2 py-1">
                      <span>Total:</span>
                      <span>{SERVICES.find(s => s.id === selectedService)?.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setBookingStep(2)} className="brutal-border px-6 py-3 font-display uppercase">Back</button>
                    <button onClick={() => setBookingStep(4)} className="brutal-btn flex-1">Confirm Booking</button>
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-8 brutal-border">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-display text-4xl uppercase mb-4">You're All Set!</h3>
                  <p className="text-xl mb-8">We've sent a confirmation email. An artist will reach out within 24 hours to discuss your design.</p>
                  <button onClick={() => setIsBooking(false)} className="brutal-btn">Back to Site</button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
