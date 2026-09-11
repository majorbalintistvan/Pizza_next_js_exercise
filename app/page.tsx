"use client";

//import Image from "next/image";

// --- Konstans adatok ---// Ezek NEM állapotok, mert soha nem változnak. A komponens FÖLÖTT vannak,// így nem keletkeznek újra minden rendereléskor.type SizeItem = {  id: string;  label: string;  price: number;};
// const SIZES: SizeItem[] = [  { id: "kicsi", label: "Kicsi (24 cm)", price: 1800 },  { id: "kozepes", label: "Közepes (32 cm)", price: 2400 },  { id: "nagy", label: "Nagy (45 cm)", price: 3200 },];

import { useState } from "react";

const sizes = [
{
id: "kicsi",
label: "Kicsi (24 cm)",
price: 1800,
},
{
id: "kozepes",
label: "Közepes (32 cm)",
price: 2400,
},
{
id: "nagy",
label: "Nagy (45 cm)",
price: 3200,
},
];

const toppings = [
{
id: "sonka",
label: "Sonka",
price: 350,
},
{
id: "gomba",
label: "Gomba",
price: 250,
},
{
id: "kukorica",
label: "Kukorica",
price: 200,
},
{
id: "szalami",
label: "Szalámi",
price: 400,
},
{
id: "paprika",
label: "Paprika",
price: 250,
},
{
id: "sajt",
label: "Extra sajt",
price: 450,
},
];

export default function HomePage() {
const [name, setName] = useState("");
const [sizeId, setSizeId] = useState("kozepes");

return (
<main className="min-h-screen bg-orange-50 px-4 py-10">
  <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
    <h1 className="text-3xl font-bold text-orange-600">
      <svg className="lucide lucide-pizza" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"    viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14-1 1"/><path d="m13.75 18.25-1.25 1.42"/><path d="M17.775 5.654a15.68    15.68 0 0 0-12.121 12.12"/><path d="M18.8 9.3a1 1 0 0 0 2.1 7.7"/><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68    0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"/></svg>
    </h1>
    <p className="mt-2 text-gray-600"> Állítsd össze a saját pizzádat!</p>
    <div className="mt-6">
      <label className="mb-2 block font-semibold text-gray-700">Vendég neve</label>
      <input
        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none transition focus:border-orange-500"
        placeholder="Írd be a neved"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="mt-2 text-gray-600">
        {name ? `Kedves ${name}, állítsd össze a pizzádat!` : "Add meg a nevedet!"}
      </p>
    </div>
    {/* Méret */}
    <div className="mt-6">
      <h2 className="mb-3 text-xl font-bold text-gray-800">Méret</h2>
      <div className="grid grid-cols-3 gap-3">{sizes.map((size) => {
          const active = size.id === sizeId;
          return (
            <button
              className={`cursor-pointer rounded-xl border px-4 py-3 transition active:scale-95 
                ${active ? "border-orange-500 bg-orange-50 font-semibold text-orange-700" : "border-gray-200 bg-white hover:bg-gray-50"}`} key={size.id} onClick={() => setSizeId(size.id)}>
              <div>{size.label}</div>
              <div className="mt-1 text-sm">
                {size.price} Ft
              </div>
            </button>
          );
        })}
      </div>
    </div>
  </div>
</main>

);
}