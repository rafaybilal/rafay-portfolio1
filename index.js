
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Podcast Thumbnail",
    image: "/public/IMG_20250616_154936.jpg",
  },
  {
    title: "Trip to Oman Thumbnail",
    image: "/public/IMG_20250616_154952.jpg",
  },
  {
    title: "India Vlog Thumbnail",
    image: "/public/IMG_20250616_155012.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Rafay Bilal</h1>
        <p className="text-lg max-w-xl mx-auto">
          Hi, I'm Rafay Bilal — a creative thumbnail designer who brings ideas to
          life through bold visuals. I help YouTubers and content creators stand
          out with eye-catching designs that boost views and engagement.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800">
              <CardContent className="p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-auto"
                />
                <p className="mt-2 text-center text-sm text-gray-300">
                  {project.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-2">Email: hanzalahkhattak302@gmail.com</p>
      </section>
    </main>
  );
}
