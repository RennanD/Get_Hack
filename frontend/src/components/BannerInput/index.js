import React, { useState, useEffect, useRef } from 'react';

import { useField } from '@rocketseat/unform';

import { Container, Label, Icon } from './styles';
import api from '~/services/api';

export default function BannerInput() {
    /**
     * Declare consts
     */

    const { defaultValue, registerField } = useField('banner');
    const [thumbnail, setThumbnail] = useState(
        defaultValue && defaultValue.url
    );
    const [file, setFile] = useState(defaultValue && defaultValue.id);

    const ref = useRef();

    /**
     * Declare functions
     */

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'banner_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref.current]); // eslint-disable-line

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);
        const response = await api.post('/files', data);

        const { id, url } = response.data;

        setFile(id);

        setThumbnail(url);
    }

    /**
     * Render component
     */

    return (
        <Container>
            <Label
                htmlFor="banner"
                style={{ backgroundImage: `url(${thumbnail})` }}
                hasThumb={!!thumbnail}
            >
                <input
                    id="banner"
                    type="file"
                    onChange={handleChange}
                    data-file={file}
                    ref={ref}
                />
                <Icon
                    hasThumb={!!thumbnail}
                    size={24}
                    color="rgba(255,255,255,0.6)"
                />
            </Label>
        </Container>
    );
}
