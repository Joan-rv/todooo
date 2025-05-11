type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 transition">
      {text}
    </button>
  );
}
