import UserForm from "@/components/user-form";
import { FormType } from "@/types/user-form";

export default function LoginPage() {
  return (
    <main>
      <UserForm type={FormType.Login} />
    </main>
  );
}
