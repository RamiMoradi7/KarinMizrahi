import "./SocialButtons.css";

export default function SocialButtons() {
  return (
    <ul className="example-2">
      <li className="icon-content">
        <a
          data-social="facebook"
          aria-label="פייסבוק"
          href="https://www.facebook.com/profile.php?id=1193324563"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-facebook"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.94 2.87 7.26 6.67 7.92V10.9h-2.2V8h2.2V6.3c0-2.26 1.34-3.54 3.42-3.54.99 0 2.05.18 2.05.18v2.2h-1.15c-1.13 0-1.5.88-1.5 1.5v1.85h2.6l-.41 2.85H9.5v5.02C13.4 15.26 16 11.66 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <div className="tooltip">פייסבוק</div>
      </li>
      <li className="icon-content">
        <a
          data-social="tiktok"
          aria-label="טיקטוק"
          href="https://www.tiktok.com/@karina_mizrahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlSpace="preserve"
            viewBox="0 0 22 22"
            className="bi bi-facebook"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
          </svg>
        </a>
        <div className="tooltip">טיקטוק</div>
      </li>
      <li className="icon-content">
        <a
          data-social="instagram"
          aria-label="אינסטגרם"
          href="https://instagram.com/karinmizrahibeauty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlSpace="preserve"
            viewBox="0 0 16 16"
            className="bi bi-instagram"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            ></path>
          </svg>
        </a>
        <div className="tooltip">אינסגרם</div>
      </li>
      
    </ul>
  );
}
