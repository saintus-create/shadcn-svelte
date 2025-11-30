"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "./ui/card";
import { toast } from "sonner"
import Countryinput from "./countryinput";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  country: z.string().min(1, { message: "Please select your country." }),
  purpose: z.string().min(1, { message: "Please select a purpose." }),

  // Optional fields depending on purpose
  feedbackLike: z.string().optional(),
  feedbackImprove: z.string().optional(),
  componentName: z.string().optional(),
  componentDetails: z.string().optional(),
  hireProject: z.string().optional(),
  hireType: z.string().optional(),
  hireBudget: z.string().optional(),
  other: z.string().optional(),
});

const Homeform = () => {
  const [purpose, setPurpose] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      purpose: "",
    },
  });



  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/sendapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Failed to send");
      }

      toast(
        "Thanks for reaching out!",{
        description: "We received your message and will reply within 1 day.",
      });
      form.reset();
      setPurpose("");
    } catch (err: any) {
      toast(
        "Something went wrong",{
        description: err?.message || "Please try again later.",
      });
    }
  }


  return (
    <Card className="w-full max-w-md p-6 rounded-3xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Alex" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="alex@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Countryinput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Purpose */}
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What would you like to do today?</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                    setPurpose(val);
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="feedback">Share Feedback</SelectItem>
                    <SelectItem value="request">Request a New Component</SelectItem>
                    <SelectItem value="hire">Hire Me</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Conditional Fields */}
          {purpose === "feedback" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="feedbackLike"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you like most about Spectrum UI?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share what stands out to you..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="feedbackImprove"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What can be improved?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your suggestions..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          {purpose === "request" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="componentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What component are you looking for?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Date Picker, Avatar Group" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="componentDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How do you want it to work or look?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe functionality or styling..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          {purpose === "hire" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="hireProject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell me about your project or idea</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Briefly describe your project..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hireType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What kind of help are you looking for?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ui">UI Development</SelectItem>
                        <SelectItem value="design-system">Design System Setup</SelectItem>
                        <SelectItem value="frontend">Frontend Integration</SelectItem>
                        <SelectItem value="consulting">Consulting / Mentorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hireBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What’s your budget range?</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<500">Less than $500</SelectItem>
                        <SelectItem value="500-2000">$500 – $2000</SelectItem>
                        <SelectItem value="2000+">More than $2000</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          )}
          {purpose === "other" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="other"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What would you like to tell me?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your thoughts..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default Homeform;
