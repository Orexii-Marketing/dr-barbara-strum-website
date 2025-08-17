import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      // Track newsletter signup in HubSpot
      import("@/lib/hubspot").then(({ trackNewsletterSignup }) => {
        trackNewsletterSignup(email);
      });
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe to newsletter.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      mutation.mutate(email);
    }
  };

  return (
    <section className="py-16 bg-luxury-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
          Stay Updated on New Products & Exclusive Offers
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get 10% off your first order plus be the first to know about new Dr. Barbara Sturm launches and exclusive luxury beauty promotions.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full text-luxury-charcoal focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="px-8 py-4 bg-luxury-gold text-white rounded-full hover:bg-yellow-600 transition-colors font-medium whitespace-nowrap"
            >
              {mutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
