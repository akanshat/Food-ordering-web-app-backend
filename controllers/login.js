const handleLogin = async (re1, res, db) =>{
    const {email:mail, password} = req.body;
    const email= mail.toLowerCase();

    if(!email || !password)
        return res.status(400).json({error: 'All fields are required'});

    const user = await db.collection('users').findOne({ email });
    if(!user)
        return res.status(400).json({error: 'Invalid email or password'});
    
    
    
    return res.status(200).json('Logged in sccuessfully');
}

module.exports = handleLogin;