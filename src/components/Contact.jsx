import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.scss";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_otrdatd",
        "template_vkl24s3",
        form.current,
        "uFyfPf0FvYzZlAdH-"
      )
      .then(() => {
        alert("문의가 정상적으로 전송되었습니다. 감사합니다.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contactInner  sectionMove">
        <div className="contactLeft">
          <h2>Contact</h2>

          <p>
            배움을 실무에 가까운 결과물로 연결하는
            <br />
            프론트엔드 개발자입니다.

            <b className="developerName">
              Frontend Developer Lee Ye Won.
            </b>

          </p>
          <div className="contactInfo">
            <span>
              <img
                src="/image/ic_email.svg"
                alt="이메일"
                className="email"
              />
              hol3161@gmail.com
            </span>

            <span>
              <img
                src="/image/ic_phone.svg"
                alt="전화"
                className="phone"
              />
              010-8591-3161
            </span>
          </div>
        </div>


        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "SENDING..." : "SEND MESSAGE"}
            <span className="material-symbols-outlined">
              send
            </span>
          </button>
        </form>
      </div>

      <footer className="contactFooter">
        <p>© 2026 Lee Yewon. All rights reserved.</p>

        <div className="footerInfo">

          <a
            href="https://github.com/hol3161-a11y"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/image/ic_github-logo.svg"
              alt="깃허브"
              className="github"
            />
            GitHub
          </a>
        </div>
      </footer>
      <div className="flowerWrap">
        <img src="/image/seed.png" alt="" className="seed seed07" />
        <img src="/image/seed.png" alt="" className="seed seed08" />
        <img src="/image/seed.png" alt="" className="seed seed09" />

        <img
          src="/image/dandelion-flower.png"
          alt="민들레"
          className="flower"
        />
      </div>
    </section>
  );
}

export default Contact;