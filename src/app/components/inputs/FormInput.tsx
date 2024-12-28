export const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-lg font-semibold text-white"
    >
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      className={`w-full lg:p-3 p-6 border rounded-md  ${
        error ? "border-red-500 text-red-500" : "border-gray-300"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="absolute text-red-500 text-sm -mt-8 left-5">{error}</p>}
  </div>
);
