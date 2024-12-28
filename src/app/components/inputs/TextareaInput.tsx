export const TextareaInput = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-lg font-semibold text-white"
    >
      {label}
    </label>
    <textarea
      name={name}
      id={id}
      rows={4}
      className={`w-full lg:p-3 pb-10 p-3 border rounded-md ${
        error ? "border-red-500 text-red-500" : "border-gray-300"
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && (
      <p className="absolute text-red-500 text-sm -mt-28 left-5">{error}</p>
    )}
  </div>
);
