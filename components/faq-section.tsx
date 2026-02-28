import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you charge homeowners?",
    answer:
      "No, homeowners do not pay us. Our referral service is completely free. There is no fee to be connected with a contractor, and no obligation to accept any quote you receive.",
  },
  {
    question: "How do you make money?",
    answer:
      "We may receive a marketing or referral fee from contractors when we connect them with homeowners. This does not affect the quotes or services you receive.",
  },
  {
    question: "Who provides the warranty?",
    answer:
      "The contractor you hire provides warranties and invoices. They are the ones performing the work and are responsible for any guarantees on the repair.",
  },
  {
    question: "How do you match me with a contractor?",
    answer:
      "Tell us what is happening and your area. We share your request with a local contractor in our network. The contractor contacts you directly to provide an estimate and schedule the work.",
  },
  {
    question: "How fast can I be connected?",
    answer:
      "Most homeowners are connected with a local contractor within 24 hours of submitting a request. If you call us directly, we can often begin the matching process the same day.",
  },
  {
    question: "Are contractors licensed and insured?",
    answer:
      "We work to connect you with contractors who carry proper licensing and insurance. We recommend you verify credentials directly with any contractor before work begins, as is standard practice.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve homeowners across the greater Ottawa region, including Ottawa proper, Kanata, Nepean, Orleans, and Barrhaven. If you are unsure whether your area is covered, give us a call.",
  },
  {
    question: "Do you perform the repairs?",
    answer:
      "No. We are strictly a referral service. We connect you with independent, third-party contractors who provide the estimates and perform the work. We do not perform repairs or provide engineering advice.",
  },
  {
    question: "What if I am not happy with the contractor?",
    answer:
      "You are never obligated to hire any contractor we connect you with. If the first match is not a fit, let us know and we can try to connect you with another option in our network.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Common questions about how our referral service works.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
