"use client";
import { MainNavigationMenu } from "@/components/navbar";
import Hero from "@/components/hero";
import {getSession} from "@/lib/session";
import { TextareaForm } from "@/components/blog-form";

export default async function Home() {  
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
          <TextareaForm />
        </div>
      </main>
    </div>
  );
}
