import {useState} from 'react';

type FormType = {
  [key: string]: any;
};

const useForm = <T extends FormType>(
  initialValue: T,
): [T, (formType: keyof T, formValue: T[keyof T]) => void] => {
  const [form, setForm] = useState<T>(initialValue);

  const updateForm = (formType: keyof T, formValue: T[keyof T]): void => {
    if (formType === 'reset') {
      setForm(initialValue);
    } else {
      setForm({...form, [formType]: formValue});
    }
  };

  return [form, updateForm];
};

export default useForm;
