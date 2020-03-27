const handleRegister = (req, res,db) =>{
    const {name, email:mail, password} = req.body;
    email = mail.toLowerCase();

if(!name || !email || !password)
    return res.status(400).json("All fields are required");

const checkUser = await db.collection('menu').findOne({email});
if(checkUser)
    res.status(400).json({error: 'Email already exists'});
else{
    await db.collection("users").insertOne({
        name,
        email,
        password
    });
    res.status(200).json({message: "Registered succesfully!"});
}

   
}

module.exports = handleRegister;