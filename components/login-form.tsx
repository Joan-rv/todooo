import { FaRegUser, FaLock } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="flex justify-center">
      <form className="bg-gray-100 rounded flex flex-col items-center w-fit m-6">
        <label className="text-xl m-2">Login</label>
        <label className="flex items-center">
          <FaRegUser className="mx-2" />
          <input
            type="text"
            placeholder="Username"
            className="border rounded ml-0 m-2 px-1"
          ></input>
        </label>
        <label className="flex items-center">
          <FaLock className="mx-2" />
          <input
            type="password"
            placeholder="Password"
            className="border rounded ml-0 m-2 px-1"
          ></input>
        </label>
        <button className="rounded border">Login</button>
      </form>
    </div>
  );
}
