export default function CodeBlock({ children, title }) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#e6e6e6]">
      {title && (
        <div className="bg-[#3c3c3c] text-white px-4 py-2 text-sm font-mono">
          {title}
        </div>
      )}
      <div className="bg-[#f8f8f8] p-6">
        <pre className="text-sm text-[#3c3c3c] whitespace-pre-wrap font-mono leading-relaxed">
          {children}
        </pre>
      </div>
    </div>
  );
}
