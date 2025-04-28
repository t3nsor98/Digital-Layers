import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaCloud,
  FaPalette,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-indigo-600 text-3xl mb-3" />,
    title: "MERN Stack Solutions",
    desc: "Full-stack web apps using MongoDB, Express, React, and Node.js. Fast, scalable, and secure.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-600 text-3xl mb-3" />,
    title: "Responsive Web Design",
    desc: "Pixel-perfect, mobile-first websites that look great on any device.",
  },
  {
    icon: <FaRocket className="text-indigo-600 text-3xl mb-3" />,
    title: "Performance Optimization",
    desc: "Lightning-fast load times and smooth user experiences for your users.",
  },
  {
    icon: <FaCloud className="text-indigo-600 text-3xl mb-3" />,
    title: "Cloud Deployment",
    desc: "Deploy, scale, and manage your apps on AWS, Vercel, Netlify, and more.",
  },
  {
    icon: <FaPalette className="text-indigo-600 text-3xl mb-3" />,
    title: "UI/UX & Animation",
    desc: "Modern, interactive, and animated interfaces that engage and delight.",
  },
  {
    icon: <FaLock className="text-indigo-600 text-3xl mb-3" />,
    title: "Security & Best Practices",
    desc: "Secure coding, authentication, and best practices for peace of mind.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

export default function Services() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-gradient-to-b from-white via-indigo-50 to-blue-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        What I Offer
      </motion.h2>
      <motion.p
        className="max-w-2xl text-lg text-gray-600 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        From idea to launch, I deliver end-to-end digital solutions to help your
        business shine online.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
