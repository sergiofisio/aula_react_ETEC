import axios from "axios";
import Input from "../../input";

const Inputs = [
  {
    name: "name",
    texto: "Nome Completo",
    type: "text",
    required: true,
  },
  {
    name: "email",
    texto: "Email",
    type: "email",
    required: true,
  },
  {
    name: "date",
    texto: "Data de nascimento",
    type: "date",
    required: true,
  },
  {
    name: "cep",
    texto: "CEP",
    type: "text",
    required: true,
  },
  {
    name: "rua",
    texto: "Rua",
    type: "text",
    required: true,
  },
  {
    name: "numero",
    texto: "Numero",
    type: "number",
    required: true,
  },
  {
    name: "complemento",
    texto: "Complemento",
    type: "text",
    required: false,
  },
  {
    name: "bairro",
    texto: "Bairro",
    type: "text",
    required: false,
  },
  {
    name: "cidade",
    texto: "Cidade",
    type: "text",
    required: false,
  },
  {
    name: "estado",
    texto: "Estado",
    type: "text",
    required: false,
  },
  {
    name: "senha",
    texto: "Senha",
    type: "password",
    required: true,
  },
  {
    name: "confSenha",
    texto: "Confirme sua senha",
    type: "password",
    required: true,
  },
];

export default function Register({ form, setForm }) {
  async function handleGetCep(e, cep) {
    e.preventDefault();
    e.stopPropagation();
    if (cep.replace(/[^0-9]/g, "").length !== 8) return;

    try {
      const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log({ resposta });

      if (resposta.data.erro) {
        alert("CEP não encontrado");
        return;
      }

      setForm({
        ...form,
        rua: resposta.data.logradouro,
        bairro: resposta.data.bairro,
        cidade: resposta.data.localidade,
        estado: resposta.data.uf,
      });
    } catch (error) {
      alert("Erro ao buscar o CEP");
      console.log({ error });
    }
  }

  return (
    <>
      {Inputs.map((input, key) => {
        return (
          <Input
            key={key}
            name={input.name}
            texto={input.texto}
            type={input.type}
            required={input.required}
            value={form[input.name]}
            onChange={(e) => {
              setForm({ ...form, [input.name]: e.target.value });
            }}
            onBlur={
              input.name === "cep"
                ? (e) => handleGetCep(e, e.target.value)
                : undefined
            }
          />
        );
      })}
    </>
  );
}
