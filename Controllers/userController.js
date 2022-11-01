const prisma = require('./../prisma');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                notes: true,
                
              },
        })

        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        })

    }
}


exports.createUser= async (req, res) => {
    try {
      const { name , age , email , password} = req.body
      const { title, description } = req.body.notes
      const newuser = await prisma.user.create({
        data: {
            name,
            email,
            password,
            age ,
          notes: {
            create: { title , description },
          },
        },
      })
  
      res.json(newuser)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
  }


  exports.updateUser =  async (req, res) => {
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

  exports.deleteUser = async (req, res) => {
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
