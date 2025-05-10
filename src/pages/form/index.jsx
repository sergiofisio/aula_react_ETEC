import { useEffect, useState } from "react";
import Form from "../../components/form";
import Register from "../../components/form/register";
import Login from "../../components/form/login";
import Button from "../../components/header/button";

export default function PageForm({ type }) {
  const [form, setForm] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(form);
  }

  useEffect(() => {
    if (type === "register") {
      setForm({
        nome: "",
        email: "",
        senha: "",
        confSenha: "",
        cep: "",
        rua: "",
        numero: 0,
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
      });
    } else {
      setForm({
        email: "",
        senha: "",
      });
    }
  }, [type]);

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        {type === "register" ? (
          <Register form={form} setForm={setForm} />
        ) : (
          <Login form={form} setForm={setForm} />
        )}
        <Button className="botao-vermelho" text="Enviar" />
      </Form>
    </section>
  );
}
