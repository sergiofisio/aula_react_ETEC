const { handleError } = require("../../utils/error");
const { verifyInput, verifyEmail } = require("../../utils/validation");
const CustomError = require("../../core/errors/CustomError");
const prisma = require("../../config/primsa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  try {
    let { email, senha } = req.body;

    const missing = verifyInput({ email, senha });

    if (missing) throw new CustomError(`campo ${missing} é obrigatório`);

    if (!verifyEmail(email))
      throw new CustomError("email inválido", { status: 400 });

    const user = await prisma.cliente.findUnique({
      where: { email },
      include: {
        endereco: true,
        telefone: true,
        reservas: true,
      },
    });

    if (!user) throw new CustomError("Email e/ou Senha incorretos", 403);

    const validarSenha = await bcrypt.compareSync(senha, user.password);

    if (!validarSenha)
      throw new CustomError("Email e/ou Senha incorretos", 403);

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    });

    res.json({ user, token });
  } catch (error) {
    handleError(error, res);
  }
}

module.exports = loginUser;
