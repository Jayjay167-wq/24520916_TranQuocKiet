const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const contactStatus = document.querySelector("#contact-status");
  const contactError = document.querySelector("#contact-error");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  const setFormState = (state, message) => {
    contactForm.dataset.state = state;
    contactForm.setAttribute("aria-busy", String(state === "submitting"));
    contactStatus.textContent = message;
    submitButton.disabled = state === "submitting";
    submitButton.textContent = state === "submitting" ? "Sending message..." : "Send message";
  };

  const showError = (message) => {
    contactError.textContent = message;
    contactError.hidden = false;
    setFormState("error", message);
  };

  const submitContactMessage = () => new Promise((resolve) => {
    window.setTimeout(resolve, 500);
  });

  contactForm.addEventListener("invalid", (event) => {
    event.target.setAttribute("aria-invalid", "true");
    showError("Please correct the highlighted field before sending your message.");
  }, true);

  contactForm.addEventListener("input", (event) => {
    event.target.removeAttribute("aria-invalid");

    if (contactForm.dataset.state === "error") {
      contactError.hidden = true;
      setFormState("idle", "Complete the form to send a message.");
    }
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (contactForm.dataset.state === "submitting") {
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    contactError.hidden = true;
    setFormState("submitting", "Sending your message...");

    try {
      await submitContactMessage();
      contactForm.reset();
      setFormState("success", "Your message has been sent successfully.");
    } catch {
      showError("Your message could not be sent. Please try again.");
    }
  });
}
