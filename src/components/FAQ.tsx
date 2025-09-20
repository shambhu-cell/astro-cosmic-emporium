import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are your gemstones authentic and certified?",
      answer: "Yes, absolutely! All our gemstones are 100% natural and come with proper certification from recognized gemological institutes. We provide lifetime authenticity guarantee on all our products."
    },
    {
      question: "How do I know which gemstone is right for me?",
      answer: "Our expert astrologers provide free consultation to analyze your birth chart and recommend the most suitable gemstones. You can book a consultation or use our online gemstone recommendation tool."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 30-day hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it in original condition for a full refund or exchange."
    },
    {
      question: "How long does shipping take?",
      answer: "We offer free shipping across India with delivery in 2-5 business days. For express delivery, we have same-day and next-day options available in select cities."
    },
    {
      question: "Do you provide gemstone energization services?",
      answer: "Yes, we offer Vedic gemstone energization (Pran Pratishtha) performed by experienced pandits. This service ensures your gemstone is spiritually activated for maximum astrological benefits."
    },
    {
      question: "Can I get my ring resized?",
      answer: "Yes, we provide free resizing service for rings within 30 days of purchase. Our jewelry experts ensure perfect fit without compromising the gemstone's integrity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including credit/debit cards, net banking, UPI, digital wallets, and EMI options. All transactions are secured with 256-bit SSL encryption."
    },
    {
      question: "Do you have physical stores?",
      answer: "While we primarily operate online, we have authorized dealers across major cities. You can also visit our main office in Delhi for in-person consultation and gemstone viewing."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-soft border-border/50"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;