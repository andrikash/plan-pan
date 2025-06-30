import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { format, subDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { MainText } from "../typography/main-text.component";

interface DatePickerFormProps {
  form: any; // TODO: Replace with the actual type of your form control
  label: string;
  fieldName: string;
  required?: boolean;
}

export function DatePickerForm({
  form,
  label,
  fieldName,
  required,
}: DatePickerFormProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const yesterday = subDays(new Date(), 1);
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>
            <MainText text={label} />
            {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <FormControl>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{t("pickADate", "Pick a date")}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  setOpen(false);
                }}
                disabled={(date) =>
                  date < yesterday || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
