import React, { useState } from 'react';

import { Input, Form } from '@rocketseat/unform';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useSelector, useDispatch } from 'react-redux';

import {
    MdCancel,
    MdEdit,
    MdAssignmentInd,
    MdEventAvailable,
    MdLocalAtm,
} from 'react-icons/md';

import { formatPrice } from '~/utils/format';

import { Container, Banner, ActionButton } from './styles';

import {
    hackCancel,
    hackUpdateRequest,
} from '~/store/modules/hackathon/actions';

import SelectDate from '~/components/SelectDate';
import BannerInput from '~/components/BannerInput';

/**
 *  Init my component
 */

export default function Details() {
    /**
     *  Declare consts
     */
    const [editing, setEditing] = useState(false);
    const hackathon = useSelector(state => state.hackathon.details);

    const priceFormatted = formatPrice(hackathon.awards);

    const dateFormatted = format(
        hackathon.date,
        "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h' ",
        {
            locale: ptBR,
        }
    );

    const dispatch = useDispatch();

    /**
     * Declare functions
     */

    function handleEdit(data) {
        const editHack = Object.assign({
            ...data,
            id: hackathon.id,
        });

        dispatch(hackUpdateRequest(editHack));
        setEditing(!editing);
    }

    /**
     * Render this component
     */

    if (editing)
        return (
            <Container>
                <Form initialData={hackathon} onSubmit={handleEdit}>
                    <Banner>
                        <header>
                            <strong />

                            <aside>
                                <ActionButton type="submit" edit>
                                    <MdEdit size={16} color="#fefefe" />
                                    Salvar edição
                                </ActionButton>
                                <ActionButton
                                    type="button"
                                    onClick={() => setEditing(!editing)}
                                >
                                    <MdCancel size={16} color="#fefefe" />
                                    Cancelar edição
                                </ActionButton>
                            </aside>
                        </header>

                        <BannerInput name="banner_id" />
                    </Banner>

                    <Input name="title" />

                    <SelectDate name="date" />
                    <Input name="awards" type="number" />

                    <Input name="description" />
                </Form>
            </Container>
        );

    return (
        <Container>
            <Banner>
                <header>
                    <strong>
                        <MdAssignmentInd color="#fefefe" size={18} />
                        Organizado por {hackathon.organizer.name}
                    </strong>

                    <aside>
                        <ActionButton
                            type="button"
                            edit
                            onClick={() => setEditing(!editing)}
                        >
                            <MdEdit size={16} color="#fefefe" />
                            Editar hackathon
                        </ActionButton>
                        <ActionButton
                            type="button"
                            onClick={() => dispatch(hackCancel(hackathon.id))}
                        >
                            <MdCancel size={16} color="#fefefe" />
                            Cancelar hackathon
                        </ActionButton>
                    </aside>
                </header>

                <img src={hackathon.banner.url} alt={hackathon.title} />
            </Banner>

            <strong>{hackathon.title}</strong>
            <div>
                <p>
                    <MdEventAvailable color="#fefefe" size={18} />
                    {dateFormatted}
                </p>
                <p>
                    <MdLocalAtm color="#fefefe" size={18} />
                    Premiação de {priceFormatted}
                </p>
            </div>
            <span>{hackathon.description}</span>
        </Container>
    );
}
