import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';

export default function AvatarInput() {
    const { registerField, defaultValue } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, []); //eslint-disable-line

    async function handleChangeAvatar(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        const response = await api.post('files', data);

        const { id, url } = response.data;
        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src={
                        preview ||
                        'https://www.morrealeres.com/morreale/wp-content/uploads/2017/04/placeholder-person.jpg'
                    }
                    alt="Avatar"
                />
                <input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    data-file={file}
                    onChange={handleChangeAvatar}
                    ref={ref}
                />
            </label>
        </Container>
    );
}
