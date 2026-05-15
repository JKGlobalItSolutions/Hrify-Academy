import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-elegant hover:scale-110 transition-transform">
      
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[oklch(0.7_0.18_150)] animate-ping opacity-30" />
    </a>);

}