import { FORM_SELECT_VALUES } from "@/app/utils/constants";
export const SelectInput = ({
  label,
  id,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-lg font-semibold text-white"
    >
      {label}
    </label>
    <select
      id={id}
      name={name}
      className={`w-full lg:p-3 p-6 border rounded-md  ${
        error ? "border-red-500 text-red-500" : "border-gray-300"
      }`}
      value={value}
      onChange={onChange}
    >
      {FORM_SELECT_VALUES.map((value) => (
        <option
          key={value}
          value={value}
        >
          {value}
        </option>
      ))}
    </select>
    {error && (
      <p className="absolute text-red-500 text-sm -mt-8 left-5">{error}</p>
    )}
  </div>
);
