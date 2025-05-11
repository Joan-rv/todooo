type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="ml-2 rounded bg-blue-500 text-white px-2 hover:bg-blue-600 transition">
      {text}
    </button>
  );
}
