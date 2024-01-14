import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactSelect from "react-select"
import mc from '@/utils/mergeClasses';
import { Button } from '../Button';
import CircularProgress from '../CircularProgress';

import {
  SCHEMA,
  INPUTS_FIELDS,
  COUNTRY_SELECT,
} from './constants/inputSetting';

const HookForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(SCHEMA),
    // defaultValues: {
    // },
  });


  const submitDataHandler = (data) => {
    setIsLoading(true);
    fetch(`submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        reset();
        alert('Form sent!');
        return response.json();
      })
      .catch(() => {
        alert('Something went wrong!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className='w-full mx-auto md:max-w-xl px-3'
      onSubmit={handleSubmit((data) => submitDataHandler(data))}
      noValidate
    >
      <div className='grid grid-cols-1 gap-x-8 gap-y-9  sm:grid-cols-2'>
        {INPUTS_FIELDS.map((field) => {
          const { onChange, onBlur, name, ref } = register(field.name);
          const InputElement = field.isTextarea ? 'textarea' : 'input';

          return (
            <div key={field.name} className={mc('relative', field.fullWidth ? 'sm:col-span-2' : '')}>
              <label
                htmlFor={name}
                className="block text-sm font-semibold  text-gray-900 first-letter:uppercase textPrimary"
              >
                {field.label}
              </label>

              <div className='mt-1'>
                <InputElement
                  id={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
                  placeholder={field.placeholder}
                  type={field.type}
                  rows={field.isTextarea ? '6' : ''}
                  className={mc(errors[field.name] ? 'border-red-600' : '',
                    'block w-full rounded-md border px-3.5 py-2 sm:text-sm sm:')}
                />
              </div>

              {errors[field.name] ?
                <div className='absolute top-full left-0 w-full text-red-600'>{errors[field.name].message}</div> : null}
            </div>
          );
        })}

        <div className='relative sm:col-span-2'>
          <label
            htmlFor={COUNTRY_SELECT.label}
            className="block text-sm font-semibold  text-gray-900 first-letter:uppercase textPrimary"
          >
            {COUNTRY_SELECT.label}
          </label>
          <ReactSelect
            {...register(COUNTRY_SELECT.label)}
            isClearable
            id={COUNTRY_SELECT.label}
            options={COUNTRY_SELECT.options}
            onChange={(data) => {
              setValue(COUNTRY_SELECT.label, data)
            }}
          />
          {errors["country"] ?
            <div className='absolute top-full left-0 w-full text-red-600'>{errors['country'].message}</div> : null}
        </div>
      </div>

      <div className='mt-8 flex justify-end'>
        <Button
          type='submit'
          sx='px-12 py-3'
        >
          {isLoading ? <CircularProgress /> : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default HookForm;

