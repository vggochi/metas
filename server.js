require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Rota: listar todas as metas
app.get("/metas", async (req, res) => {
  const { data, error } = await supabase.from("metas").select("*");
  if (error) return res.status(400).json(error);
  res.json(data);
});

// Rota: adicionar meta
app.post("/metas", async (req, res) => {
  const { titulo, descricao, prazo } = req.body;
  const { data, error } = await supabase
    .from("metas")
    .insert([{ titulo, descricao, prazo }]);
  if (error) return res.status(400).json(error);
  res.json(data);
});

app.post("/metas", async (req, res) => {
  const { titulo, descricao, prazo } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: "O campo 'titulo' é obrigatório." });
  }

  const { data, error } = await supabase
    .from("metas")
    .insert([{ titulo, descricao, prazo }]);

  if (error) return res.status(400).json(error);
  res.json(data);
});


// Atualizar meta (ex: marcar como concluída)
app.put("/metas/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, prazo, concluida } = req.body;

  const { data, error } = await supabase
    .from("metas")
    .update({ titulo, descricao, prazo, concluida })
    .eq("id", id);

  if (error) return res.status(400).json(error);
  res.json(data);
});


// Rota: filtrar metas concluídas
app.get("/metas/concluidas", async (req, res) => {
  const { data, error } = await supabase
    .from("metas")
    .select("*")
    .eq("concluida", true);
  if (error) return res.status(400).json(error);
  res.json(data);
});

app.delete("/metas/:id", async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("metas")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json(error);
  res.json({ message: "Meta removida com sucesso!", data });
});


app.listen(3000, () => console.log("API rodando na porta 3000 🚀"));
