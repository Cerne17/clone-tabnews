function status(request, response) {
  response.status(200).json({ mensagem: "Os alunos.pog são devs" })
}

export default status;