"use client";

import { useState } from "react";

import IncrementButton from "@/app/IncrementButton";

let count1: number = 0;

function incrementCount1() {
  count1++;
}

export default function HomePage() {
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
    </main>
  );
}
