import fetch from "node-fetch";

class EstudanteController{

    async listar(req , res) {

        const lista = await fetch('https://estudante-api.herokuapp.com/estudantes/todos')

        console.log(lista);

        return res.render("index")

    }

}

export default new EstudanteController();