"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is included in the travel package?",
    answer:
      "Our travel packages include accommodation, local transport, guided tours, and select meals. Details may vary per package.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes, we offer fully customizable itineraries. Contact our team to tailor your dream trip.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. Refunds are applicable based on cancellation timelines. Please refer to our refund policy page for details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10" id="faq">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-5 bg-white shadow-sm transition-all duration-300"
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold"
              onClick={() => toggle(idx)}
            >
              <span>{faq.question}</span>
              {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === idx && (
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
