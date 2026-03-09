import { MainText } from "../typography/main-text.component";
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
  label?: string;
  required?: boolean;
  fieldName: string;
  type?: string;
}

export function InputForm({
  form,
  placeholder,
  label,
  required,
  fieldName,
  type = "text",
}: InputFormProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel>
              <MainText text={label} />
              {required && <sup className="text-red-500">*</sup>}
            </FormLabel>
          )}
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
