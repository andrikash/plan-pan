import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { MainText } from "../typography/main-text.component";
import { SecondaryText } from "../typography/secondary-text.component";

interface ComboboxItem {
  label: string;
  value: string;
}

interface ComboboxFormProps {
  form: any; // TODO: Replace with the actual type of your form control
  items: ComboboxItem[];
  fieldName: string;
  label: string;
  required?: boolean;
  className?: string;
}

export function ComboboxForm({
  form,
  items,
  fieldName,
  label,
  required,
}: ComboboxFormProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  console.log(open, "open");
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabel>
            <MainText text={label} />
            {required && <sup className="text-red-500">*</sup>}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <FormControl>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <SecondaryText
                    text={
                      field.value
                        ? items.find((item) => item.value === field.value)
                            ?.label || ""
                        : t("selectAnOption", {
                            defaultValue: "Select an option",
                          })
                    }
                  />

                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent className="w-[200px] p-0" align="end">
              <Command>
                <CommandInput placeholder="Search option..." className="h-9" />
                <CommandList>
                  <CommandEmpty>
                    {t("noOptionFound", {
                      defaultValue: "No option found.",
                    })}
                  </CommandEmpty>
                  <CommandGroup>
                    {items.map((item) => (
                      <CommandItem
                        value={item.label}
                        key={item.value}
                        onSelect={() => {
                          setOpen(false);
                          form.clearErrors(fieldName);
                          form.setValue(fieldName, item.value);
                        }}
                      >
                        {item.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
