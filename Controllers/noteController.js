const prisma = require('./../prisma');

exports.getAllNotes= async (req, res) => {
    try {
      const notes = await prisma.note.findMany()
  
      res.json(notes)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  }

  exports.createnote= async (req, res) => {
    try {
      const { title, description } = req.body
      const newNote = await prisma.note.create({
        data: {
          title,
          description,
        },
      })
  
      res.json(newNote)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
  }


  exports.updatenote =  async (req, res) => {
    try {
      const { title, description } = req.body
      const id  = parseInt(req.params.id) 
  
      const updatedNote = await prisma.note.update({
        where: {
          id ,
        },
        data: {
          title,
          description,
        },
      })
  
      res.json(updatedNote)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  }

  exports.deletenote = async (req, res) => {
    try {
      const  id  = parseInt(req.params.id) 
  
      const deletednote = await prisma.note.delete({
        where: {
          id,
        },
      })
  
      res.json(deletednote)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  }
