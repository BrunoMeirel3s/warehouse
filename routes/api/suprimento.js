const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Suprimento = require("../../models/Suprimento");

// @route  PUT api/suprimento
// @desc   Update supply
// @access Private
router.put("/", auth, async (req, res) => {
  const { codigo, modelo, cor, disponivel } = req.body;

  const camposSuprimento = {};
  if (codigo) camposSuprimento.codigo = codigo;
  if (modelo) camposSuprimento.modelo = modelo;
  if (cor) camposSuprimento.cor = cor;
  if (disponivel) camposSuprimento.disponivel = disponivel;

  try {
    let suprimento = await Suprimento.findOne({ codigo });
    if (suprimento) {
      suprimento = await Suprimento.findOneAndUpdate(
        { codigo: req.body.codigo },
        { $set: camposSuprimento },
        { new: true }
      );
      return res.json(suprimento);
    } else {
      return res.status(400).send("Suprimento não encontrado");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route  POST api/suprimento
// @desc   Insert supply
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("codigo", "Insira o código do suprimento").not().isEmpty(),
      check(
        "modelo",
        "Insira o modelo de equipamento para qual o suprimento será utilizado"
      )
        .not()
        .isEmpty(),
      check("disponivel", "Informe se o suprimento está disponível")
        .not()
        .isEmpty(),
      check("cor", "Insira a cor do suprimento").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const erros = validationResult(req);
    //if the const erros is not empty it means that we've erros so we'll send a message for the user
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() });
    }

    const { codigo, modelo, cor, disponivel } = req.body;
    try {
      let suprimento = await Suprimento.findOne({ codigo });
      if (suprimento) {
        return res.status(400).send("Suprimento já cadastrado");
      }
      suprimento = await Suprimento({
        codigo,
        modelo,
        cor,
        disponivel,
      });

      await suprimento.save();
      return res.json(suprimento);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  const { codigo } = req.body;
  try {
    let suprimento;

    if (codigo) {
      suprimento = await Suprimento.findOne({ codigo });
    } else {
      suprimento = await Suprimento.find();
    }
    return res.json(suprimento);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
