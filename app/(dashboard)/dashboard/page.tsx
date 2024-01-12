"use client";
import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";
import { TextareaForm } from "@/components/blog-form";
import Posts from "@/components/posts";

export default async function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
          <TextareaForm />
          <Posts />
        </div>
      </main>
    </div>
  );
}
