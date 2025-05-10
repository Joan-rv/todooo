import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-200 flex justify-center items-center py-4">
      <h1>Created by Joan Ripoll</h1>
      <Link className="mx-4" href="https://github.com/Joan-rv">
        <FaGithub size={25} />
      </Link>
    </footer>
  );
}
