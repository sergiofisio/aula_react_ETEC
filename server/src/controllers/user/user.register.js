const { handleError } = require("../../utils/error");
const { verifyInput, verifyEmail } = require("../../utils/validation");
const CustomError = require("../../core/errors/CustomError");
const prisma = require("../../config/primsa");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    let { nome, email, data_nascimento, endereco, telefone, senha } = req.body;

    const missing = verifyInput({
      nome,
      email,
      data_nascimento,
      endereco,
      telefone,
      senha,
    });

    if (missing) throw new CustomError(`campo ${missing} é obrigatório`);

    if (!verifyEmail(email))
      throw new CustomError("email inválido", { status: 400 });

    const existUser = await prisma.cliente.findUnique({
      where: { email },
    });

    if (existUser)
      throw new CustomError("email já cadastrado", { status: 400 });

    senha = await bcrypt.hash(senha, 10);

    data_nascimento = new Date(data_nascimento);

    if (isNaN(data_nascimento)) {
      throw new CustomError("data_nascimento inválida", { status: 400 });
    }

    const novoCliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        data_nascimento,
        password: senha,
      },
    });

    await prisma.endereco.create({
      data: {
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        cep: endereco.cep.replace(/\D/g, ""),
        userId: novoCliente.id,
      },
    });

    await prisma.telefone.create({
      data: {
        ddd: telefone.ddd,
        numero: telefone.numero.replace(/\D/g, ""),
        userId: novoCliente.id,
      },
    });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso",
    });
  } catch (error) {
    handleError(error, res);
  }
}

module.exports = registerUser;
