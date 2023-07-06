const ExampleModel = require('../models/ExampleModel');

exports.exampleRoute = async (req, res) => {
  try {
    const result = await ExampleModel.aggregate([
      {
        $lookup: {
          from: 'relatedCollection',
          localField: 'fieldToMatch',
          foreignField: 'fieldToMatch',
          as: 'matchedData'
        }
      },
      // Additional aggregation stages if needed
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
