import { useQuasar } from "quasar";

export default function useNotify() {
    const $q = useQuasar();

    const notifySuccess = (message) => {
        $q.notify({
            type: "positive",
            message: message || "Cadastro realizado com sucesso ",
            progress: true,
            timeout: 2000,
        });
    };


    const notifyError = (message) => {
        $q.notify({
            type: "negative",
            message: message || "Erro ao cadastrar o usuário !",
            progress: true,
            timeout: 2000,
        });
    };

    return {
        notifySuccess,
        notifyError,
    };
}