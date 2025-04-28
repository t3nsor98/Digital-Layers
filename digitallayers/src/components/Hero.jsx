// Hero.jsx
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Web App",
    caption: "From bold ideas to pixel-perfect execution.",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Creative Design",
    caption: "Designs that tell your story.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    alt: "Collaboration",
    caption: "Client-focused, collaborative development.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
  }),
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.4 + 0.5, duration: 0.9, type: "spring" },
  }),
};

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex flex-col items-center py-12 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2 text-center"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        Hi, I'm <span className="text-indigo-600">Digbijaya Lenka</span>
      </motion.h1>
      {/* Subtitle */}
      <motion.h2
        className="text-xl md:text-2xl font-medium text-indigo-700 mb-6 text-center"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariants}
      >
        Founder of{" "}
        <span className="bg-indigo-100 px-2 rounded">Digital Layers</span>
      </motion.h2>
      {/* Description */}
      <motion.p
        className="max-w-xl text-lg text-gray-700 mb-8 text-center"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={textVariants}
      >
        I build beautiful, fast, and custom websites & web apps for your ideas
        and business. From first sketch to launch, I work with you to create
        digital experiences that feel alive, engaging, and uniquely yours.
      </motion.p>
      {/* CTA */}
      <motion.a
        href="mailto:digbijaya.lenka@email.com"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-200 animate-bounce"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariants}
        whileHover={{ scale: 1.07 }}
      >
        Let's Build Your Vision
      </motion.a>
      {/* Images */}
      <div className="flex flex-wrap justify-center gap-8 my-12 w-full max-w-5xl">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xs w-full hover:scale-105 transition-transform duration-300"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={imgVariants}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 32px rgba(99,102,241,0.2)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-indigo-700 font-medium text-center">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Story Section */}
      <motion.section
        className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-indigo-700 mb-3">
          Every project is a story
        </h3>
        <p className="text-gray-700 mb-6">
          At Digital Layers, technology amplifies your story. I craft digital
          products that are modern, animated, and responsive-always tailored for
          you.
        </p>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="bg-indigo-50 text-indigo-700 rounded-full px-5 py-2 font-semibold">
            🌟 Custom websites & apps
          </li>
          <li className="bg-indigo-50 text-indigo-700 rounded-full px-5 py-2 font-semibold">
            ⚡ Fast & secure
          </li>
          <li className="bg-indigo-50 text-indigo-700 rounded-full px-5 py-2 font-semibold">
            🎨 Modern, animated UI
          </li>
          <li className="bg-indigo-50 text-indigo-700 rounded-full px-5 py-2 font-semibold">
            🤝 1-on-1 collaboration
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
