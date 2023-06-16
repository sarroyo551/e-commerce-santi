const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(tags)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(tag)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
   // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)
    res.json(tag)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(deletedTag)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

module.exports = router;
