"use client";

import { CheckIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CustomPricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      description: "Essential dental tracking for everyone.",
      features: [
        "Appointment Scheduling",
        "Limited AI Chat (3 per day)",
        "Basic Dental Tips",
        "Record Storage",
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      isPro: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "Advanced AI care for the serious patient.",
      features: [
        "Unlimited AI Consultations",
        "Priority Booking Support",
        "X-Ray Analysis (WIP)",
        "Advanced Analytics",
        "No Advertisements",
      ],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default" as const,
      popular: true,
      isPro: true,
    },
    {
      name: "Family",
      price: "$49",
      period: "/month",
      description: "Complete dental security for your whole family.",
      features: [
        "Everything in Pro",
        "Up to 5 Family Members",
        "Shared Dental History",
        "Family Wellness Reports",
        "24/7 Dedicated Support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      isPro: true,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 ${
            plan.popular
              ? "border-primary shadow-lg scale-105 z-10"
              : "border-border/50 hover:border-primary/30"
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3 h-3" />
              MOST POPULAR
            </div>
          )}

          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            <CardDescription className="min-h-[40px] mt-2 italic px-4">
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center">
              <span className="text-4xl font-black">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground ml-1 font-medium">
                  {plan.period}
                </span>
              )}
            </div>

            <div className="space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm">
                  <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/80 leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <Button
              className={`w-full h-12 rounded-xl font-bold transition-all ${
                plan.popular
                  ? "bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02]"
                  : "hover:bg-primary/5"
              }`}
              variant={plan.buttonVariant}
            >
              {plan.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
