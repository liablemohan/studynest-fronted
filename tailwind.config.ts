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
                // Brand colors
                navy: {
                    dark: "#141b2d",
                    DEFAULT: "#1f2b47",
                    mid: "#2a3a5c",
                    light: "#3d4f73",
                },
                beige: {
                    dark: "#b8a88a",
                    DEFAULT: "#d4c4a8",
                    mid: "#e8dcc8",
                    light: "#f5f0e6",
                },
                gold: {
                    dark: "#b8860b",
                    DEFAULT: "#d4a012",
                    mid: "#e6b422",
                    light: "#f0c850",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xl: "calc(var(--radius) + 4px)",
                "2xl": "calc(var(--radius) + 8px)",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Outfit", "Inter", "system-ui", "sans-serif"],
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
                    "25%": { transform: "translateY(-15px) rotate(1deg)" },
                    "75%": { transform: "translateY(-8px) rotate(-1deg)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1", filter: "brightness(1)" },
                    "50%": { opacity: "0.85", filter: "brightness(1.15)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 10s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
                "scale-in": "scale-in 0.4s ease-out forwards",
                gradient: "gradient-shift 5s ease infinite",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-gold": "linear-gradient(135deg, #d4a012 0%, #b8860b 100%)",
                "gradient-navy": "linear-gradient(135deg, #2a3a5c 0%, #141b2d 100%)",
                "gradient-brand": "linear-gradient(135deg, #d4a012 0%, #d4c4a8 50%, #1f2b47 100%)",
            },
            boxShadow: {
                "glow-gold": "0 0 20px rgba(212, 160, 18, 0.35), 0 0 40px rgba(212, 160, 18, 0.2)",
                "glow-navy": "0 0 20px rgba(31, 43, 71, 0.4), 0 0 40px rgba(31, 43, 71, 0.2)",
                "glow-beige": "0 0 20px rgba(212, 196, 168, 0.3), 0 0 40px rgba(212, 196, 168, 0.15)",
                glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
                "card-hover": "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(212, 160, 18, 0.12)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
