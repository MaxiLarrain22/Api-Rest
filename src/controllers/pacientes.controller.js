const { error } = require("console");
const { pool } = require("../db.js");


module.exports.getPacientes=async (req,res) =>{
    try{
    const [rows]=await pool.query('SELECT * FROM pacientes')
    res.json(rows)
} catch (error) {
    return res.status(500).json({
        message:"Algo salio mal"
    })
}
}

module.exports.getPacientedni= async (req,res) =>{
    try {
        
    const [rows] = await pool.query("SELECT * FROM pacientes WHERE dni=?",[req.params.dni])
    if (rows.length <=0) return res.status(404).json({
        message:"No se encontro el paciente"
    })
    res.json(rows[0])
}    catch (error) {
        return res.status(500).json({
        message:"Algo salio mal"
    })
}
}

module.exports.postPaciente=async (req,res) => {
    const {dni,nombre,apellido,edad,telefono,direccion,id_distrito,id_patologia}=req.body
    try {
            const [rows]=await pool.query("INSERT INTO pacientes (dni,nombre,apellido,edad,telefono,direccion,id_distrito,id_patologia) VALUES (?,?,?,?,?,?,?,?)",
    [dni,nombre,apellido,edad,telefono,direccion,id_distrito,id_patologia])

    res.send({
        id:rows.insertId,
        dni,
        nombre,
        apellido,
        edad,
        telefono,
        direccion,
        id_distrito,
        id_patologia
    })
}
        catch (error) {
                return res.status(500).json({
        message:"Algo salio mal"
        });
        }
    }


module.exports.updatePaciente=async (req,res) =>{
    const {dni}=req.params
    const{nombre,apellido,edad,telefono,direccion,id_distrito,id_patologia}=req.body;

    try {
        const [result]=await pool.query("UPDATE pacientes SET nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido),edad=IFNULL(?,edad),telefono=IFNULL(?,telefono),direccion=IFNULL(?,direccion) WHERE dni=?"
    ,[nombre,apellido,edad,telefono,direccion,dni,id_distrito,id_patologia])

    if (result.affectedRows===0) return res.status(404).json({message:'No se encontró el paciente'})

    const [rows]=await pool.query("SELECT * FROM pacientes WHERE dni=?",[dni])
    
    res.json(rows[0])
    } catch (error) {
                return res.status(500).json({
        message:"Algo salio mal"
    })
    }
}

module.exports.deletePaciente= async (req,res) => {
try {
        const result = await pool.query("DELETE FROM pacientes WHERE dni=?",[req.params.dni])
    if (result.affectedrows <=0) return res.status(404).json({
        message:"No se encontro el paciente"
    })
    res.sendStatus(204)
}
    catch (error) {
                return res.status(500).json({
        message:"Algo salio mal"
    })
    
}
}

