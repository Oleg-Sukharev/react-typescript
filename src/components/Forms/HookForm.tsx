import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import ReactSelect from "react-select";
import Textarea from "../Textarea";
import { Button } from "../Button";
import CircularProgress from "../CircularProgress";
import InputField from "../InputField";
import * as yup from "yup";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email is incorrect")
    .matches(EMAIL_REGEX, "Email is incorrect")
    .required("Email is required"),
  comments: yup.string().required("Comments are required"),
  country: yup.object().required("Country is required"),
});

interface CountryOptions {
  label: string;
  value: string;
}

const COUNTRY_OPTIONS: CountryOptions[] = [
  { label: "United States", value: "US" },
  { label: "Mexico", value: "MX" },
  { label: "Canada", value: "CA" },
];

interface FormValues {
  name: string;
  email: string;
  comments: string;
  country: CountryOptions;
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  comments: "",
  country: COUNTRY_OPTIONS[0],
};

const HookForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(SCHEMA),
    defaultValues,
  });

  const submitDataHandler: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    fetch(`submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        reset();
        alert("Form sent!");
        return response.json();
      })
      .catch(() => {
        alert("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="mx-auto w-full px-3 md:max-w-xl"
      onSubmit={handleSubmit((data: any) => submitDataHandler(data))}
      noValidate
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-9  sm:grid-cols-2">
        <InputField
          {...register("name")}
          dirtyField={dirtyFields.name}
          label="First Name"
          error={errors.name?.message}
        />
        <InputField
          {...register("email")}
          dirtyField={dirtyFields.email}
          type="email"
          label="Email"
          error={errors.email?.message}
        />

        <Textarea
          className="sm:col-span-2"
          {...register("comments")}
          dirtyField={dirtyFields.comments}
          label="Comments"
          error={errors.comments?.message}
        />

        <div className="relative sm:col-span-2">
          <label
            htmlFor="country"
            className="textPrimary block text-sm  font-semibold text-gray-900 first-letter:uppercase"
          >
            Country
          </label>
          <ReactSelect
            defaultValue={COUNTRY_OPTIONS[0]}
            {...register("country")}
            isClearable
            id="country"
            options={COUNTRY_OPTIONS}
            onChange={(data) => {
              setValue("country", data as CountryOptions);
            }}
          />
          {errors.country?.message ? (
            <div className="absolute left-0 top-full w-full text-red-600">{errors.country?.message}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button type="submit">{isLoading ? <CircularProgress /> : "Send"}</Button>
      </div>
    </form>
  );
};

export default HookForm;
