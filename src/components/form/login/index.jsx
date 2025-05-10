import Input from "../../input";

const Inputs = [
  {
    name: "email",
    texto: "Email",
    type: "email",
    required: true,
  },
  {
    name: "senha",
    texto: "Senha",
    type: "password",
    required: true,
  },
];

export default function Login({ form, setForm }) {
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
          />
        );
      })}
    </>
  );
}
