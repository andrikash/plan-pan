import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputFormProps {
  form: any; // TODO: Replace with the actual type of your form control
  placeholder: string;
  label: string;
  required?: boolean;
  fieldName: string;
}

export function InputForm({
  form,
  placeholder,
  label,
  required,
  fieldName,
}: InputFormProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <sup className="text-red-500">*</sup>}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
