import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          {/* LinkedIn Endorsement */}
          <div className="mt-8 p-6 bg-background rounded-lg shadow-sm border animate-fade-up [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-4">
              <Linkedin className="h-5 w-5 text-[#0077B5]" />
              <p className="font-medium">Recent Endorsement</p>
            </div>
            <blockquote className="text-muted-foreground italic">
              "Dorian is an exceptional UX designer who consistently delivers thoughtful and innovative solutions. Their attention to detail and user-centric approach sets them apart."
            </blockquote>
            <p className="mt-4 text-sm font-medium">
              - Sarah Chen, Senior Product Manager at TechCorp
            </p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 animate-fade-up [animation-delay:400ms]"
          noValidate
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Input
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                aria-label="Your Name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                aria-label="Your Email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={cn("min-h-[150px]", errors.message ? "border-destructive" : "")}
              aria-label="Your Message"
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full md:w-auto rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
