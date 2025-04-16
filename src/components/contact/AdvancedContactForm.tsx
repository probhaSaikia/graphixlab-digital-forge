
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { Send, Loader2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Form schema validation with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  services: z.enum(['web-development', 'ui-ux-design', 'mobile-app', 'digital-marketing', 'other']).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AdvancedContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useIsMobile();
  
  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      services: undefined,
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset the form after 1 second
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 1000);
    }, 1000); // Reduced timeout for better UX
  };

  // Simplified animation variants for better performance
  const formVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? 0 : i * 0.05, // reduced or eliminated delays on mobile
        duration: 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-black/70 backdrop-blur-sm p-5 md:p-8 rounded-xl border border-electric-blue/20 shadow-lg hover:shadow-electric-blue/10 transition-all duration-300"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 relative inline-block">
        Send Us a Message
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF]"></span>
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <motion.div 
              custom={0} 
              initial="hidden" 
              animate="visible" 
              variants={formVariants}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div 
              custom={1} 
              initial="hidden" 
              animate="visible" 
              variants={formVariants}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <motion.div 
              custom={2} 
              initial="hidden" 
              animate="visible" 
              variants={formVariants}
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Phone Number" 
                        className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div 
              custom={3} 
              initial="hidden" 
              animate="visible" 
              variants={formVariants}
            >
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Project Inquiry" 
                        className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          
          <motion.div 
            custom={4} 
            initial="hidden" 
            animate="visible" 
            variants={formVariants}
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white min-h-[100px] md:min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div 
            custom={5} 
            initial="hidden" 
            animate="visible" 
            variants={formVariants}
            className="pt-1 md:pt-2"
          >
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-electric-blue to-[#FF52FF] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-md hover:shadow-glow transition-all duration-300"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};

export default AdvancedContactForm;
