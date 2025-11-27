"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Campaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    target_donation: "",
    poster_image: null as File | null,
  });

  const quillRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        if ((window as any).Quill && document.querySelector("#editor")) {
          quillRef.current = new (window as any).Quill("#editor", {
            theme: "snow",
          });

          // Set initial content to formData
          quillRef.current.on("text-change", () => {
            const content = quillRef.current.root.innerHTML;
            setFormData((prev) => ({
              ...prev,
              description: content,
            }));
          });

          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fieldName = e.target.name;

    if (file) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: file,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const submitFormData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          submitFormData.append(key, value);
        } else if (value !== null && value !== undefined && value !== "") {
          submitFormData.append(key, value.toString());
        }
      });

      const response = await fetch("/api/campaign", {
        method: "POST",
        body: submitFormData,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Campaign berhasil dibuat!");

        // Reset form
        setFormData({
          title: "",
          description: "",
          start_date: "",
          end_date: "",
          target_donation: "",
          poster_image: null,
        });

        if (quillRef.current) {
          quillRef.current.root.innerHTML = "";
        }
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to create campaign: ${response.status} ${errorText}`);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat membuat campaign: " + (error as Error).message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-leaf-950">Buat Campaign</h2>
      </div>

      <Card>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Judul Campaign</label>
            <input
              type="text"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500"
              placeholder="Masukkan judul campaign"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Deskripsi Campaign</label>
            <div id="editor" className="h-64 bg-white"></div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Tanggal Mulai</label>
              <input
                type="date"
                name="start_date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500"
                value={formData.start_date}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Tanggal Selesai</label>
              <input
                type="date"
                name="end_date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500"
                value={formData.end_date}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Target */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Target Donasi</label>
            <input
              type="number"
              name="target_donation"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500"
              placeholder="Masukkan target donasi"
              value={formData.target_donation}
              onChange={handleInputChange}
            />
          </div>

          {/* Image */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Gambar Poster</label>
            <input
              type="file"
              name="poster_image"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-leaf-50 file:text-leaf-700 hover:file:bg-leaf-100"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit */}
          <Button className="w-full" onClick={handleSubmit}>
            <i className='bx bx-send mr-2'></i>
            Sebarkan!
          </Button>
        </form>
      </Card>
    </div>
  );
}
