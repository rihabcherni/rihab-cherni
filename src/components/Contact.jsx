import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactItems, socialLinks } from "../data/data";

const Contact = ({ t, isDark, visibleSections }) => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k59k08i",
        "template_4axm3hd",
        formRef.current,
        "CZjUoWlyOZL9ZeCsf"
      )
      .then(() => {
        alert(t.contact.success || "Message envoyé avec succès !");
        formRef.current.reset();
      })
      .catch(() => {
        alert(t.contact.error || "Erreur lors de l’envoi du message.");
      });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center transition-all duration-1000 ${visibleSections.has("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`relative p-6 rounded-xl ${isDark ? "bg-gray-800" : "bg-white"
                      } shadow-lg group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: visibleSections.has("contact")
                        ? "fadeInUp 0.6s ease-out both"
                        : "none",
                    }}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon with bounce */}
                    <div
                      className="animate-bounce"
                      style={{
                        animationDuration: "3s",
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <Icon
                        className={`h-8 w-8 mx-auto mb-4 bg-gradient-to-br ${item.color} bg-clip-text`}
                      />
                    </div>

                    {/* Title and value */}
                    <h3 className="font-semibold mb-2 text-center">{t.contact[item.key]}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center" dir={item.dir || "ltr"}>
                      {item.value}
                    </p>
                  </div>
                );
              })}
              <div className="flex gap-6 mt-6 justify-center">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full ${isDark ? social.darkBg : social.lightBg
                        } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-360`}
                      title={social.title}
                    >
                      <Icon
                        className={`h-6 w-6 ${social.color} hover:text-white transition-colors`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              className={`p-8 rounded-2xl ${isDark ? "bg-gray-800" : "bg-white"
                } shadow-xl transform transition-all duration-500 hover:scale-105`}
            >
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {t.contact.titleForm || "Envoyez-moi un message"}
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t.contact.placeholderName || "Votre nom"}
                    className={`w-full p-4 rounded-lg border ${isDark
                        ? "bg-gray-800 text-white border-gray-600"
                        : "bg-white text-gray-900 border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t.contact.placeholderEmail || "votre@email.com"}
                    className={`w-full p-4 rounded-lg border ${isDark
                        ? "bg-gray-800 text-white border-gray-600"
                        : "bg-white text-gray-900 border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contact.placeholderSubject || "Sujet de votre message"}
                  className={`w-full p-4 rounded-lg border ${isDark
                      ? "bg-gray-800 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder={t.contact.placeholderMessage || "Votre message ici..."}
                  className={`w-full p-4 rounded-lg border resize-none ${isDark
                      ? "bg-gray-800 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
