const menuList = async (req, res, db) =>{
    
    const menu = await db.collection("menu").find({}).toArray();
    console.log(menu);
    return res.status(200).json({menu});
}

module.exports = menuList;