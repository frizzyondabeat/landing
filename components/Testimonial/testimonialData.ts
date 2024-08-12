import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: "David Akpos",
        designation: "Founder @davidAndSons",
        image: image1,
        content:
            "Techsphere Properties made my home search effortless. The intuitive platform and dedicated support team helped me find the perfect property quickly. Highly recommend!",
    },
    {
        id: 2,
        name: "Deji Adebola",
        designation: "",
        image: image2,
        content:
            "The high-quality visuals and detailed market insights provided by Techsphere Properties were invaluable. They truly understand what clients need and deliver beyond expectations.",
    },
    {
        id: 3,
        name: "Jessica Dauda",
        designation: "",
        image: image1,
        content:
            "From start to finish, Techsphere Properties exceeded my expectations. Their regular updates and expert advice made the entire process smooth and stress-free.",
    },
    {
        id: 4,
        name: "Efeoghene Omonigho",
        designation: "Founter @democompany",
        image: image2,
        content:
            "Working with Techsphere Properties was a game-changer. Their personalized approach and real-time tracking features helped me stay on top of my property search effortlessly.",
    },
];
