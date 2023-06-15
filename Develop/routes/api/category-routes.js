const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categories = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(categories)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const category = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(category)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category = await Category.create(req.body)
    res.json(category)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
