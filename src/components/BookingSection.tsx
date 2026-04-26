import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
}

const eventTypeOptions = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Brand Promotion",
  "Surprise Event",
  "Other",
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const validate = () => {
    const e: FormErrors = {};

    if (!formData.name.trim()) e.name = "Name is required";

    if (!formData.phone.trim()) {
      e.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      e.phone = "Phone must be 10 digits";
    }

    if (!formData.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter valid email";
    }

    if (!formData.eventType) e.eventType = "Select event type";
    if (!formData.eventDate) e.eventDate = "Select event date";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        message: "",
      });

      toast({
        title: "Booking Submitted 🎉",
        description: "Your booking has been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const set = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  if (submitted) {
    return (
      <section
        id="booking"
        className="section-padding bg-section-gradient-reverse"
      >
        <div className="max-w-lg mx-auto text-center">
          <CheckCircle size={64} className="text-accent mx-auto mb-6" />

          <h2 className="text-3xl font-bold mb-4">Booking Received!</h2>

          <p className="text-muted-foreground">
            Our team will contact you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="section-padding bg-section-gradient-reverse"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase mb-3">
            Book Now
          </p>

          <h2 className="text-4xl font-bold">Book Your Event</h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label>Full Name *</label>

              <Input
                value={formData.name}
                onChange={(e) => set("name", e.target.value)}
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label>Phone *</label>

              <Input
                value={formData.phone}
                onChange={(e) => set("phone", e.target.value)}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label>Email *</label>

            <Input
              type="email"
              value={formData.email}
              onChange={(e) => set("email", e.target.value)}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Event Type + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label>Event Type *</label>

              <select
                className="w-full border rounded-md h-10 px-3 bg-background text-white"
                value={formData.eventType}
                onChange={(e) => set("eventType", e.target.value)}
              >
                <option value="" className="text-black">
                  Select Event Type
                </option>

                {eventTypeOptions.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="text-black"
                  >
                    {item}
                  </option>
                ))}
              </select>

              {errors.eventType && (
                <p className="text-red-500 text-sm">
                  {errors.eventType}
                </p>
              )}
            </div>

            <div>
              <label>Event Date *</label>

              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => set("eventDate", e.target.value)}
              />

              {errors.eventDate && (
                <p className="text-red-500 text-sm">
                  {errors.eventDate}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label>Message</label>

            <Textarea
              rows={3}
              value={formData.message}
              onChange={(e) => set("message", e.target.value)}
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full" size="lg">
            {loading ? "Submitting..." : "Submit Booking"}
            <Send size={16} className="ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;