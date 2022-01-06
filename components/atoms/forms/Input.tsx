import { UseFormRegister, Path, FieldValues } from 'react-hook-form';

export interface InputProps<T> {
  placeholder?: string;
  label?: string | undefined;
  register: UseFormRegister<T>;
  required?: boolean;
  name: Path<T>;
  rest?: any;
  error?: string;
  type?: string;
}

const Input = <T extends FieldValues>({
  name,
  label,
  placeholder,
  required = false,
  register,
  error,
  type = 'text',
}: InputProps<T>): JSX.Element => (
  <fieldset className="mb-12 bg-transparent w-full">
    {label !== undefined && (
      <label className="block font-bold">
        {label}
        {required ? '*' : ''}
      </label>
    )}
    <input
      type={type}
      name={name}
      style={{ backgroundColor: 'transparent' }}
      className={`w-full bg-transparent text-xl md:text-4xl font-bold border-b border-grey-600 p-4 focus:outline-none ${
        error ? ' border border-red-500 b' : ''
      }`}
      placeholder={placeholder}
      {...register(name, { required })}
    />
    {error && (
      <div className="text-red-500 mt-3 animate-fadeUp delay-350">
        {error.charAt(0).toUpperCase() + error.slice(1)}
      </div>
    )}
  </fieldset>
);

export default Input;
