import { ChangeEvent } from "react";

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputBox = ({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) => {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type || "text"}
        className="w-full border-2 rounded-md px-4 py-2 my-2"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
