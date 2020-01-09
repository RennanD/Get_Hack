import React, { useRef, useEffect, useState } from 'react';

import pt from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import { Date } from './styles';

export default function DatePicker({ name }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'props.selected',
            clearValue: pickerRef => {
                pickerRef.clear();
            },
        });
    }, [ref.current, fieldName]); // eslint-disable-line

    return (
        <>
            <Date
                name={fieldName}
                selected={selected}
                onChange={date => setSelected(date)}
                ref={ref}
                showTimeSelect
                locale={pt}
                timeFormat="p"
                timeIntervals={30}
                dateFormat="Pp"
                timeCaption="time"
                date-file={selected}
                placeholderText="Selecione uma data"
            />
            {error && <span>{error}</span>}
        </>
    );
}
