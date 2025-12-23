import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Extended gold colors
                gold: {
                    DEFAULT: "#d4a012",
                    light: "#f5c321",
                    dark: "#b8860b",
                },
                navy: {
                    DEFAULT: "#1a3a6e",
                    light: "#2a4a8e",
                    dark: "#0c1120",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "33%": { transform: "translateY(-10px) rotate(1deg)" },
                    "66%": { transform: "translateY(-5px) rotate(-1deg)" },
                },
                "glow-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(212, 160, 18, 0.3)" },
                    "50%": { boxShadow: "0 0 40px rgba(212, 160, 18, 0.5), 0 0 60px rgba(212, 160, 18, 0.3)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "bounce-gentle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "slide-in-bottom": {
                    "0%": { opacity: "0", transform: "translateY(100%)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "glow-pulse": "glow-pulse 2s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
                "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
                "fade-in-up": "fade-in-up 0.5s ease-out forwards",
                "scale-in": "scale-in 0.3s ease-out forwards",
                "slide-in-bottom": "slide-in-bottom 0.4s ease-out forwards",
            },
            transitionTimingFunction: {
                "bounce-in": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "smooth-out": "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            backgroundImage: {
                "gold-gradient": "linear-gradient(135deg, #d4a012 0%, #f5c321 100%)",
                "navy-gradient": "linear-gradient(135deg, #1a3a6e 0%, #0c1120 100%)",
                "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            },
            boxShadow: {
                "glow-gold": "0 0 20px rgba(212, 160, 18, 0.3), 0 0 40px rgba(212, 160, 18, 0.2)",
                "glow-gold-lg": "0 0 30px rgba(212, 160, 18, 0.4), 0 0 60px rgba(212, 160, 18, 0.3)",
                "card-hover": "0 25px 50px -12px rgba(26, 58, 110, 0.25)",
                "premium": "0 10px 30px -10px rgba(212, 160, 18, 0.5)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
