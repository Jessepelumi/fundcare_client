import { CircleCheck } from "lucide-react";

interface PasswordStrengthProps {
  text: string;
  isValid: boolean;
}

const PasswordStrength = ({ text, isValid }: PasswordStrengthProps) => {
  return (
    <div className="flex gap-2 items-center">
      <CircleCheck size={20} fill={isValid ? "green" : "grey"} stroke="white" />
      <p className={`text-mm ${isValid ? "text-black" : "text-gray-400"}`}>
        {text}
      </p>
    </div>
  );
};

export default PasswordStrength;
