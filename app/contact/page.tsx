"use client";

import { useState } from "react";
import { motion } from "motion/react";



export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="section" aria-labelledby="contact">
        <div className="section-top">
          <p className="eyebrow">A little history</p>
          <h2 id="contact" className="section-title">
            A little history
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              A little research goes a long way. We explore the possibilities
              before we start shooting.
            </p>
            <ul>
              <li>
                <strong>London</strong>
                <br />
                12 Film Street, London, UK
              </li>
              <li>
                <strong>Phone</strong>
                <br />
                +44 20 7946 0123
              </li>
              <li>
                <strong>Email</strong>
                <br />
                hello@cinema.example
              </li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            noValidate
          >
            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p>Thanks for reaching out.</p>
                <p>We&apos;ll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      minLength={5}
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={150}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={3000}
                  />
                </div>
                <button type="submit" className="contact-submit">
                  Send message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
