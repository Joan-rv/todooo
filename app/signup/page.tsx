import UserForm from "@/components/user-form";
import { FormType } from "@/types/user-form";

export default function SignupPage() {
  return <UserForm type={FormType.Signup} />;
}
