import { FormEvent, MutableRefObject } from "react";
import { redirect } from "react-router-dom";

import emailjs from "@emailjs/browser";

async function checkAuth() {
  const isLoggedIn: boolean = true;

  return !isLoggedIn ? redirect("/") : null;
}

function enableDarkMode(element: MutableRefObject<HTMLElement>): void {
  localStorage.setItem("darkMode", "enabled");

  element.current.classList.add("dark");
}

function disableDarkMode(element: MutableRefObject<HTMLElement>): void {
  localStorage.setItem("darkMode", "disabled");

  element.current.classList.remove("dark");
}

async function sendEmail(event: FormEvent) {
  event.preventDefault();

  emailjs
    .sendForm("service_y9ydwnr", "template_laens46", "#form", {
      publicKey: "EtIMAfm8sazwK4gkS",
    })
    .then(
      () => {},
      () => {
        throw new Error(
          "Упс.. Возникла проблема с отправкой письма, попробуй еще раз?"
        );
      }
    );
}

export { checkAuth, enableDarkMode, disableDarkMode, sendEmail };
