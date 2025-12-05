# metas

🧪 Testes no Thunder Client
1. GET /metas → Listar todas as metas
Método: GET

URL:

Código
http://localhost:3000/metas
Resultado esperado: Lista todas as metas cadastradas no Supabase.


[
  {
    "id": "a511d86e-8bb9-45a0-840c-8a7722e7f346",
    "titulo": "Estudar JavaScript",
    "descricao": "Praticar exercícios diariamente",
    "prazo": "2025-12-31",
    "concluida": false
  }
]
2. GET /metas/concluidas → Listar só concluídas
Método: GET

URL:

Código
http://localhost:3000/metas/concluidas
Resultado esperado: Apenas metas com concluida = true.

json 

Apenas um exemplo:
[
  {
    "id": "b1234567-89ab-45cd-ef01-234567890abc",
    "titulo": "Organizar finanças pessoais",
    "descricao": "Criar planilha de gastos mensais",
    "prazo": "2025-03-31",
    "concluida": true
  }
]
3. POST /metas → Criar nova meta
Método: POST

URL:

Código
http://localhost:3000/metas
Body → JSON:

json
{
  "titulo": "Concluir projeto da faculdade",
  "descricao": "Finalizar TCC e apresentar",
  "prazo": "2025-11-15"
}
Resultado esperado: Retorna a meta criada com id gerado pelo Supabase.

4. PUT /metas/:id → Atualizar meta existente
Método: PUT

URL:

Código
http://localhost:3000/metas/<ID_DA_META>
⚠️ Substitua <ID_DA_META> pelo valor real do campo id obtido no GET.

Body → JSON:

json
{
  "concluida": true
}
Resultado esperado: Atualiza a meta e marca como concluída.

5. DELETE /metas/:id → Remover meta
Método: DELETE

URL:

Código
http://localhost:3000/metas/<ID_DA_META>
Resultado esperado:

json
{
  "message": "Meta removida com sucesso!",
  "data": [
    {
      "id": "d89b0206-ce3f-4c05-b2e6-d6d094c76cd3",
      "titulo": "Estudar JavaScript",
      "descricao": "Praticar exercícios diariamente",
      "prazo": "2025-12-31",
      "concluida": true
    }
  ]
}
