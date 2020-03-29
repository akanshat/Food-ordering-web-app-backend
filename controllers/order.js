const order = async (req, res, db) => {

    const items = await db.collection("cart").find({}).toArray();
    await db.collection("cart").insertOne({
        name,
        priceSelected,
        directions
      });
      res.status(200).json({ message: 'Added to cart' })
    return res.status(200).json({items});
}

module.exports = order;