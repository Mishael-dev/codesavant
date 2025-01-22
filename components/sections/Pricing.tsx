import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "month",
    features: [
      "Up to 50 students",
      "Basic exam creation tools",
      "Automated grading",
      "Standard analytics"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "month",
    features: [
      "Up to 200 students",
      "Advanced exam creation",
      "Priority grading",
      "Detailed analytics",
      "Custom test cases"
    ],
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited students",
      "Full platform access",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3C3C] mb-12">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-[#F09A63]' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F09A63] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-[#3C3C3C]">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#3C3C3C]">{plan.price}</span>
                  <span className="text-[#3C3C3C]/70">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#F09A63]" />
                      <span className="text-[#3C3C3C]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-[#F09A63] hover:bg-[#F09A63]/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}