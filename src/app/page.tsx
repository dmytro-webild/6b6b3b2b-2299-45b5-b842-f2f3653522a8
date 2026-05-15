"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Mail, Leaf, Droplet, Sprout, Wind } from "lucide-react";

export default function SkincareTemplatePage() {
    return (
        <ThemeProvider
            defaultButtonVariant="hover-bubble"
            defaultTextAnimation="reveal-blur"
            borderRadius="rounded"
            contentWidth="small"
            sizing="largeSmallSizeLargeTitles"
            background="aurora"
            cardStyle="gradient-bordered"
            primaryButtonStyle="double-inset"
            secondaryButtonStyle="solid"
            headingFontWeight="extrabold"
        >
            <div id="nav" data-section="nav">
                <NavbarStyleCentered
                    brandName="Luminé Skincare"
                    navItems={[
                        { name: "Products", id: "products" },
                        { name: "About", id: "about" },
                        { name: "Benefits", id: "benefits" },
                        { name: "Reviews", id: "reviews" },
                        { name: "Contact", id: "contact" }
                    ]}
                    button={{ text: "Shop Now", href: "products" }}
                />
            </div>

            <div id="hero" data-section="hero">
                <HeroLogoBillboard
                    logoText="Luminé"
                    description="Pure, natural skincare formulated for radiant, healthy skin. Discover the power of botanical ingredients and scientific innovation."
                    background={{ variant: "sparkles-gradient" }}
                    imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/hero.webp"
                    imageAlt="Luxury skincare products with natural ingredients"
                    frameStyle="card"
                    buttons={[
                        { text: "Shop Now", href: "#products" },
                        { text: "Learn More", href: "#about" }
                    ]}
                    mediaAnimation="slide-up"
                />
            </div>

            <div id="about" data-section="about">
                <InlineImageSplitTextAbout
                    heading={[
                        { type: "text", content: "Crafted with care and precision using nature's finest elements and cutting-edge skincare science to deliver exceptional results for your skin" },
                        { type: "image", src: "https://img.b2bpic.net/free-photo/make-up-brushes-pile-wild-flowers-wooden-background_482257-9797.jpg", alt: "Natural ingredients" },
                        { type: "text", content: "" }
                    ]}
                    buttonAnimation="blur-reveal"
                    useInvertedBackground={true}
                    buttons={[
                        { text: "Learn More", href: "#benefits" }
                    ]}
                />
            </div>

            <div id="products" data-section="products">
                <ProductCardOne
                    title="Our Signature Collection"
                    description="Discover our carefully curated skincare essentials designed to nourish and revitalize your skin. Worldwide shipping available."
                    products={[
                        {
                            id: "1",
                            name: "Hydrating Moisturizer",
                            price: "$68",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image2.webp",
                            imageAlt: "Hydrating Moisturizer bottle"
                        },
                        {
                            id: "2",
                            name: "Radiance Serum",
                            price: "$85",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image3.webp",
                            imageAlt: "Radiance Serum bottle"
                        },
                        {
                            id: "3",
                            name: "Purifying Face Mask",
                            price: "$52",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image1.webp",
                            imageAlt: "Purifying Face Mask jar"
                        }
                    ]}
                    gridVariant="three-columns-all-equal-width"
                    animationType="slide-up"
                    textboxLayout="default"
                    useInvertedBackground={false}
                />
            </div>

            <div id="benefits" data-section="benefits">
                <FeatureBento
                    title="Why Choose Luminé"
                    description="Scientifically-formulated skincare products that deliver visible results with natural, sustainable ingredients. Available for worldwide shipping."
                    features={[
                        {
                            title: "Worldwide Shipping",
                            description: "Fast and reliable delivery to over 150 countries worldwide",
                            bentoComponent: "globe"
                        },
                        {
                            title: "Clinically Proven",
                            description: "Dermatologist-tested and proven effective in clinical trials",
                            bentoComponent: "line-chart"
                        },
                        {
                            title: "Sustainable",
                            description: "Eco-conscious packaging and ethical sourcing practices",
                            bentoComponent: "orbiting-icons",
                            centerIcon: Leaf,
                            items: [
                                { icon: Droplet, ring: 1 },
                                { icon: Sprout, ring: 2 },
                                { icon: Wind, ring: 3 }
                            ]
                        }
                    ]}
                    animationType="slide-up"
                    textboxLayout="default"
                    useInvertedBackground={true}
                />
            </div>

            <div id="reviews" data-section="reviews">
                <TestimonialCardFifteen
                    testimonial="Luminé skincare has completely transformed my routine. My skin feels more radiant and healthy than ever before. I love that it's made with natural ingredients I can trust. Plus, worldwide shipping made it so easy to get my products delivered wherever I am."
                    rating={5}
                    author="Sarah Mitchell, Beauty Editor"
                    avatars={[
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image5.avif", alt: "Sarah Mitchell" },
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image6.avif", alt: "Customer testimonial" },
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image7.avif", alt: "Customer testimonial" },
                        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image8.avif", alt: "Customer testimonial" }
                    ]}
                    ratingAnimation="slide-up"
                    avatarsAnimation="slide-up"
                    useInvertedBackground={false}
                />
            </div>

            <div id="faq" data-section="faq">
                <FaqSplitMedia
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our skincare products, worldwide shipping, and delivery."
                    faqs={[
                        {
                            id: "1",
                            title: "How long does it take to see results?",
                            content: "Most customers notice visible improvements in skin texture and radiance within 2-4 weeks of consistent use. For more significant results like reduced fine lines or hyperpigmentation, allow 6-8 weeks."
                        },
                        {
                            id: "2",
                            title: "Are your products suitable for sensitive skin?",
                            content: "Yes! All Luminé products are formulated to be gentle and non-irritating. We use natural ingredients and avoid common irritants. We recommend patch testing first if you have very reactive skin."
                        },
                        {
                            id: "3",
                            title: "Do you offer worldwide shipping?",
                            content: "Absolutely! We ship to over 150 countries worldwide. Standard shipping typically takes 7-14 business days depending on your location. Express shipping options are also available for faster delivery."
                        },
                        {
                            id: "4",
                            title: "What is your return policy?",
                            content: "We offer a 60-day satisfaction guarantee on all purchases. If you're not completely happy with your skincare, return it for a full refund or exchange. Worldwide returns are processed efficiently through our international shipping partners."
                        }
                    ]}
                    imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/skincare/image4.webp"
                    imageAlt="Skincare routine and wellness"
                    mediaPosition="left"
                    textboxLayout="default"
                    faqsAnimation="slide-up"
                    mediaAnimation="slide-up"
                    useInvertedBackground={true}
                    animationType="smooth"
                />
            </div>

            <div id="contact" data-section="contact">
                <ContactCenter
                    tag="Newsletter"
                    title="Get Your Glow On"
                    description="Subscribe to our newsletter for skincare tips, product launches, and exclusive worldwide shipping offers delivered to your inbox."
                    tagIcon={Mail}
                    background={{ variant: "plain" }}
                    useInvertedBackground={false}
                    inputPlaceholder="Enter your email"
                    buttonText="Subscribe"
                    termsText="We respect your privacy. Unsubscribe anytime."
                />
            </div>

            <div id="footer" data-section="footer">
                <FooterBaseCard
                    logoText="Luminé"
                    columns={[
                        {
                            title: "Product",
                            items: [
                                { label: "Moisturizers", href: "#products" },
                                { label: "Serums", href: "#products" },
                                { label: "Masks", href: "#products" },
                                { label: "Bundles", href: "#products" }
                            ]
                        },
                        {
                            title: "Company",
                            items: [
                                { label: "About Us", href: "#about" },
                                { label: "Sustainability", href: "#about" },
                                { label: "Blog", href: "#" },
                                { label: "Careers", href: "#" }
                            ]
                        },
                        {
                            title: "Support",
                            items: [
                                { label: "Contact Us", href: "#contact" },
                                { label: "FAQ", href: "#faq" },
                                { label: "Worldwide Shipping", href: "#" },
                                { label: "Returns", href: "#" }
                            ]
                        },
                        {
                            title: "Connect",
                            items: [
                                { label: "Instagram", href: "#" },
                                { label: "Facebook", href: "#" },
                                { label: "Pinterest", href: "#" },
                                { label: "TikTok", href: "#" }
                            ]
                        }
                    ]}
                    copyrightText="© 2025 Luminé Skincare. All rights reserved."
                />
            </div>
        </ThemeProvider>
    );
}
