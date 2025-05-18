"use client";

import { useState, useRef, useEffect } from "react";
import Notifications from "./UI/Notifications";
import LoadingSpinner from "./UI/LoadingSpinner";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  comment: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comment: "",
  });

  // Create refs for form elements
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Array of refs for keyboard navigation
  const formRefs = [
    nameInputRef,
    emailInputRef,
    commentTextareaRef,
    submitButtonRef,
  ];

  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle keyboard navigation
  const handleKeyNavigation = (
    e: React.KeyboardEvent,
    currentIndex: number
  ) => {
    // Navigate with arrow keys
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % formRefs.length;
      formRefs[nextIndex].current?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + formRefs.length) % formRefs.length;
      formRefs[prevIndex].current?.focus();
    }
  };

  // Show notification helper function
  const showMessage = (message: string, type: "success" | "error") => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowNotification(false);

    try {
      // Basic validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.comment.trim()
      ) {
        showMessage("Please fill in all fields", "error");
        setLoading(false);
        return;
      }

      // Email validation
      if (!formData.email.includes("@")) {
        showMessage("Please enter a valid email address", "error");
        setLoading(false);
        return;
      }

      // Create FormData object
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("comment", formData.comment);
      formDataToSubmit.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
      );

      // Send form data to web3forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        showMessage(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        // Reset form
        setFormData({ name: "", email: "", comment: "" });
      } else {
        showMessage(
          data.message || "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showMessage("An unexpected error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Notification Component */}
      <Notifications
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />
      <div className="bg-neutral-white text-neutral-dark rounded-[30px] py-10 px-5 md:py-[50px] md:px-[100px] xl:p-[50px] flex flex-col gap-10 md:gap-[50px]">
        <h3>
          Ordering <span className="text-primary">from us</span> is quick and
          easy! Fill out <span className="text-neutral-green">the form</span>{" "}
          below and we will contact you !
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.name}
            ref={nameInputRef}
            onKeyDown={(e) => handleKeyNavigation(e, 0)}
            aria-label="Full Name"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            ref={emailInputRef}
            onKeyDown={(e) => handleKeyNavigation(e, 1)}
            aria-label="Email Address"
          />
          <textarea
            rows={4}
            name="comment"
            id="comment"
            placeholder="comment"
            onChange={handleChange}
            value={formData.comment}
            className="border border-border rounded-[15px] py-[14px] md:py-4 px-4 resize-none"
            ref={commentTextareaRef}
            onKeyDown={(e) => handleKeyNavigation(e, 2)}
            aria-label="Your Message"
          />
          <button
            type="submit"
            className="uppercase font-semibold text-sm leading-[18px] py-4 bg-neutral-green text-neutral-white rounded-4xl md:text-xl md:leading-[18px] mt-5 md:mt-6 cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-300"
            ref={submitButtonRef}
            onKeyDown={(e) => handleKeyNavigation(e, 3)}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <LoadingSpinner size="md" /> Sending...
              </span>
            ) : (
              "send"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
