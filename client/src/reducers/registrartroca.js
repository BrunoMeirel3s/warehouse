import {
  SUCESSO_REGISTRAR_TROCA,
  FALHA_REGISTRAR_TROCA,
} from "../actions/types";

const estadosIniciais = {
  registro: null,
  sucessoRegistrarTroca: null,
};

export default function (state = estadosIniciais, action) {
  const { type, payload } = action;
  switch (type) {
    case SUCESSO_REGISTRAR_TROCA:
      return {
        ...state,
        registro: payload,
        sucessoRegistrarTroca: true,
      };
    case FALHA_REGISTRAR_TROCA:
      return {
        ...state,
        registro: null,
        sucessoRegistrarTroca: false,
      };
    default:
      return state;
  }
}
