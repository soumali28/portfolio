import { Mail, Phone, Copy, MessageCircle, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./section";

const Footer = () => {
  const email = "goraisoumali5@gmail.com";
  const phone = "+91 9153123364";

  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <Section className="mt-24" showDivider={false} title="">
      <div className="mx-auto max-w-4xl">

        {/* Container */}
        <div className="relative bg-gradient-to-b from-white to-neutral-100/90 p-10 border border-neutral-200 rounded-3xl">

          {/* Floating Label */}
          <div className="-top-4 left-1/2 absolute -translate-x-1/2">
            <div className="bg-black shadow-md px-4 py-1.5 rounded-full text-white text-sm">
              Contact
            </div>
          </div>

          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-semibold text-neutral-900 text-4xl">
              Let’s work together
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-neutral-600">
              Building a product, startup, or platform? I'm always excited to
              collaborate on thoughtful ideas and meaningful products.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="gap-6 grid md:grid-cols-2">

            {/* Email */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex justify-between items-center bg-white shadow-sm p-5 border border-neutral-200 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-neutral-100 rounded-full w-10 h-10">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-neutral-500 text-xs tracking-wide">
                    EMAIL
                  </p>
                  <p className="font-medium text-neutral-800 text-sm">
                    {email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(email)}
                className="hover:bg-neutral-100 p-2 rounded-md transition"
              >
                <Copy size={16} />
              </button>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex justify-between items-center bg-white shadow-sm p-5 border border-neutral-200 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-neutral-100 rounded-full w-10 h-10">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-neutral-500 text-xs tracking-wide">
                    PHONE / WHATSAPP
                  </p>
                  <p className="font-medium text-neutral-800 text-sm">
                    {phone}
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(phone)}
                className="hover:bg-neutral-100 p-2 rounded-md transition"
              >
                <Copy size={16} />
              </button>
            </motion.div>

          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <motion.a
              whileHover={{ y: -2 }}
              href="https://cal.com"
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-neutral-100 px-5 py-3 border border-neutral-200 rounded-lg transition"
            >
              <Coffee size={16} />
              Book a Chat
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href={`https://wa.me/${phone}`}
              target="_blank"
              className="flex items-center gap-2 bg-white hover:bg-neutral-100 px-5 py-3 border border-neutral-200 rounded-lg transition"
            >
              <MessageCircle size={16} />
              Text on WhatsApp
            </motion.a>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-neutral-200 border-t text-center">
            <p className="text-neutral-500 text-sm">
              Built with ❤️ by{" "}
              <span className="font-medium text-neutral-800">Sou</span>
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Footer;