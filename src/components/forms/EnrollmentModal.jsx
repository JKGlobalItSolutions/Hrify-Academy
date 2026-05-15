import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { courseData } from "@/data/courseData";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobileNumber: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  whatsappNumber: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number").optional().or(z.literal("")),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  selectedCourse: z.string().min(1, "Please select a course"),
  preferredBatch: z.string().min(1, "Please select a preferred batch"),
  modeOfLearning: z.string().min(1, "Please select a learning mode"),
  educationalQualification: z.string().min(1, "Qualification is required"),
  targetExamYear: z.string().min(4, "Year is required"),
  message: z.string().optional(),
  agreeToContact: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted",
  }),
});

export function EnrollmentModal({ isOpen, onOpenChange, defaultCourse = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      whatsappNumber: "",
      email: "",
      city: "",
      state: "",
      selectedCourse: defaultCourse,
      preferredBatch: "",
      modeOfLearning: "",
      educationalQualification: "",
      targetExamYear: new Date().getFullYear().toString(),
      message: "",
      agreeToContact: false,
    },
  });

  // Keep form's selected course in sync with props
  React.useEffect(() => {
    if (defaultCourse && isOpen) {
      form.setValue("selectedCourse", defaultCourse);
    }
  }, [defaultCourse, isOpen, form]);

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const GOOGLE_SHEETS_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL;
      
      if (!GOOGLE_SHEETS_WEBAPP_URL) {
        // Fallback for demo if URL is not set
        console.warn("Google Sheets WebApp URL not found. Mocking submission.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Enrollment submitted successfully!");
        form.reset();
        onOpenChange(false);
        setIsSubmitting(false);
        return;
      }

      // Prepare payload
      const payload = {
        timestamp: new Date().toISOString(),
        ...values
      };

      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      // With no-cors, we can't read the response, so we assume success if it doesn't throw
      toast.success("Enrollment submitted successfully! We will contact you soon.");
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">Enroll Now</DialogTitle>
          <DialogDescription>
            Fill out the form below and our academic counselor will get in touch with you.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            
            {/* Student Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Student Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl><Input placeholder="john@example.com" type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl><Input placeholder="9876543210" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl><Input placeholder="9876543210" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl><Input placeholder="Mumbai" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl><Input placeholder="Maharashtra" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Course Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="selectedCourse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selected Course *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courseData.map((course) => (
                            <SelectItem key={course.id} value={course.title}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredBatch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Batch *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select batch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Weekday Morning">Weekday Morning</SelectItem>
                          <SelectItem value="Weekday Evening">Weekday Evening</SelectItem>
                          <SelectItem value="Weekend">Weekend</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="modeOfLearning"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mode of Learning *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Regular Classroom Batch">Regular Classroom Batch</SelectItem>
                          <SelectItem value="Weekend Classroom Batch">Weekend Classroom Batch</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="educationalQualification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Educational Qualification *</FormLabel>
                      <FormControl><Input placeholder="e.g. B.Tech, 12th Pass" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetExamYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Exam Year *</FormLabel>
                      <FormControl><Input type="number" placeholder="2025" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message / Notes (Optional)</FormLabel>
                    <FormControl><Textarea placeholder="Any specific requirements..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToContact"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to be contacted by HRIFY Academy via call, SMS, or WhatsApp.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Enrollment
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
