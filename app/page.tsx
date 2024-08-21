"use client";
import { useState, useEffect } from 'react';

const faqs = [
  { question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click on "Forgot Password?" Follow the instructions sent to your email.' },
  { question: 'Where can I find my order history?', answer: 'You can view your order history by logging into your account and navigating to the "Orders" section in your profile.' },
  { question: 'What is the return policy?', answer: 'Our return policy allows you to return items within 30 days of receipt. Please visit our returns page for more details and instructions.' },
  { question: 'How do I contact customer support?', answer: 'You can contact customer support through our "Contact Us" page or by emailing support@example.com.' },
  { question: 'Are there any discounts available?', answer: 'We offer various discounts and promotions. Check our "Deals" page for the latest offers and coupon codes.' },
  { question: 'Can I change my shipping address after placing an order?', answer: 'If your order has not yet been shipped, you may be able to change your shipping address by contacting customer support.' },
  { question: 'How can I track my order?', answer: 'Once your order has shipped, you will receive a tracking number via email. You can use this number to track your shipment on our website.' },
];

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    const filtered = faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandAll = () => {
    setOpenIndex(-1);
  };

  const collapseAll = () => {
    setOpenIndex(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search FAQs..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4 space-y-2">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-4 py-2 text-left bg-gray-100 border-b border-gray-300 focus:outline-none"
              >
                {faq.question}
              </button>
              <div
                className={`px-4 py-2 bg-gray-50 ${openIndex === index || openIndex === -1 ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No FAQs found.</p>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={expandAll}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Collapse All
        </button>
      </div>
    </div>
  );
};

export default FaqPage;
