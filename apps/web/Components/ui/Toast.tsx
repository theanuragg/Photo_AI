'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import { AnimatedList, AnimatedListItem } from "@/Components/ui/Animatelist"; // Using your existing animation setup

interface ToastMessage {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
}

interface ToastContextType {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

// Creating the context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000); // Auto-remove after 3s
  };

  // Provide individual functions instead of exposing `addToast` directly
  const toastFunctions: ToastContextType = {
    success: (msg: string) => addToast(msg, "success"),
    error: (msg: string) => addToast(msg, "error"),
    info: (msg: string) => addToast(msg, "info"),
  };

  return (
    <ToastContext.Provider value={toastFunctions}>
      {children}

      {/* Using AnimatedList with Your Design */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end">
        <AnimatePresence>
          <AnimatedList delay={500}>
            {toasts.map((toast) => (
              <AnimatedListItem key={toast.id}>
                <div
                  className={`px-4 py-2 rounded-md shadow-lg text-white ${
                    toast.type === "success" ? "bg-green-500" :
                    toast.type === "error" ? "bg-red-500" :
                    "bg-blue-500"
                  }`}
                >
                  {toast.message}
                </div>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
