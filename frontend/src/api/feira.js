import axios from 'axios';

const host = `${process.env.REACT_APP_HOST}/feira`;

export async function listFeiras() {
    const info = await axios
        .get(host, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return info === null ? [] : info.data;
};

export async function feiraAtual() {
    const feira = await axios
        .get(`${host}/info`, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return feira ? feira.data : {};
};

export async function post(data, photo) {
    const feira = await axios
        .post(host, { data, photo }, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return Boolean(feira);
};

export async function deletaUltimaFeira() {
    const feira = await axios
        .delete(host, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return feira;
};

export async function alteraStatusFeira(data) {
    const feira = await axios
        .put(`${host}/altera-status`, { data }, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return feira;
};

export async function atualizaFoto(data, photo) {
    const feira = await axios
        .put(`${host}`, { data, photo }, { headers: { token: localStorage.getItem('token') } })
        .catch(ex => console.error(ex));

    return feira;
};
