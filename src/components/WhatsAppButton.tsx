export default function WhatsAppButton() {
  const phone = '919526000677'; // Country code + number
  const message = encodeURIComponent('Hello Granite World, I would like to know more about your services.');
  const href = `https://wa.me/${phone}?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-400/50 active:scale-95 transition px-5 py-3 pr-6"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C9.41 3 4 8.41 4 15.05c0 2.65.86 5.1 2.33 7.11L4.82 29l7.07-1.48A12.02 12.02 0 0 0 16.04 27C22.66 27 28 21.59 28 14.96 28 8.34 22.66 3 16.04 3Zm0 21.82c-1.72 0-3.37-.45-4.83-1.3l-.35-.21-4.2.88.88-4.1-.23-.38a9.56 9.56 0 0 1-1.4-5.06c0-5.29 4.3-9.6 9.62-9.6 5.27 0 9.57 4.31 9.57 9.6 0 5.28-4.3 9.57-9.57 9.57Zm5.26-7.14c-.29-.15-1.74-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.16-.17.19-.35.21-.64.06-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.52-.06-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.36-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.06.15.19 2.11 3.23 5.1 4.53.71.31 1.27.5 1.7.64.71.22 1.35.19 1.86.12.57-.08 1.74-.71 1.99-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.2-.55-.35Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white text-[8px] font-bold text-green-600 flex items-center justify-center group-hover:scale-110 transition">
          ✓
        </span>
      </span>
      <span className="text-sm font-medium leading-none">WhatsApp</span>
    </a>
  );
}
