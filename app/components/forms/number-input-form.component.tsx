import { MainText } from "../typography/main-text.component";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { NumberInput } from "../ui/number-input";

interface NumberInputFormProps {
  form: any; // TODO: Replace with the actual type of your form control
  placeholder: string;
  label: string;
  required?: boolean;
  fieldName: string;
  type?: string;
}

export function NumberInputForm({
  form,
  placeholder,
  label,
  required,
  fieldName,
}: NumberInputFormProps) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            <MainText text={label} />
            {required && <sup className="text-red-500">*</sup>}
          </FormLabel>
          <FormControl>
            <NumberInput
              placeholder={placeholder}
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
