import db from '../db'

class DoadoresControllers {
    insertDoacao(req, resp) {
        const {
            nome,
            cpf,
            endereco,
            email,
            telefone
        } = req.body;

        if (!nome || !cpf || !endereco || !email || !telefone) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO doadores (nome, cpf, endereco, email, telefone)
        VALUES (?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, endereco, email, telefone], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new DoadoresControllers()