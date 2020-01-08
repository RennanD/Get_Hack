import React, { useState } from 'react';

import { Form, Input, Textarea } from '@rocketseat/unform';

import { format, parseISO } from 'date-fns';
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

import { Container, Banner, ActionButton, Date } from './styles';

import {
    hackCancel,
    hackUpdateRequest,
} from '~/store/modules/hackathon/actions';

/**
 *  Init my component
 */

export default function Details() {
    /**
     *  Declare consts
     */

    const hackathon = useSelector(state => state.hackathon.details);

    const [isEdit, setIsEdit] = useState(false);
    const [date, setDate] = useState(hackathon.dateFomatted);

    const priceFormatted = formatPrice(hackathon.awards);

    const dateFormatted = format(
        parseISO(hackathon.date),
        "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h' ",
        {
            locale: ptBR,
        }
    );

    const dispatch = useDispatch();

    /**
     * Declare funtions
     */

    function handleSubmit(data) {
        dispatch(hackUpdateRequest(data));
    }

    /**
     * Render this component
     */

    if (isEdit)
        return (
            <Container>
                <Form initialData={hackathon} onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Título do hackathon" />
                    <Textarea
                        name="description"
                        placeholder="Descrição do hackathon"
                    />

                    <hr />

                    <div>
                        <Date
                            selected={date}
                            onChange={newDate => setDate(newDate)}
                            locale="pt"
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={15}
                            dateFormat="dd 'de' MMM 'de' yyyy 'às' HH:mm "
                        />
                        <Input name="awards" type="number" />
                    </div>

                    <div>
                        <ActionButton type="submit" edit>
                            Salvar dados
                        </ActionButton>
                        <ActionButton
                            type="submit"
                            onClick={() => setIsEdit(!isEdit)}
                        >
                            Cancelar
                        </ActionButton>
                    </div>
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
                            onClick={() => setIsEdit(!isEdit)}
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