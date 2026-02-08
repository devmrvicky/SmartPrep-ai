import { Controller, type Control } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  JSX,
} from "react";
import type { EmailRegisterInput } from "@/zod/signupSchema";
import type { loginSchemaInput } from "@/zod/loginSchema";

interface InputControllerProps {
  control: Control<any>;
  inputName: keyof EmailRegisterInput | keyof loginSchemaInput;
  inputTitle: string;
  inputId: string;
  placeholder: string;
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
  inputIcon?: JSX.Element;
  inputType?: HTMLInputTypeAttribute | undefined;
}

export default function InputController({
  control,
  inputId,
  inputName,
  inputTitle,
  placeholder,
  autoComplete,
  inputIcon,
  inputType = "text",
}: InputControllerProps) {
  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="gap-0">
          <FieldLabel
            htmlFor={inputId}
            className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
          >
            {inputTitle}
          </FieldLabel>
          <div className="relative">
            {inputIcon && inputIcon}
            <Input
              {...field}
              type={inputType}
              id={inputId}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="w-full pl-10 pr-4 py-5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
