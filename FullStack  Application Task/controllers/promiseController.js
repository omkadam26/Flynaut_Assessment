exports.exampleRoute = (req, res) => {
  // Simulating asynchronous operations
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 2 rejected'));
    }, 3000);
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1000);
  });

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });

  // Alternatively, you can handle each promise separately
  // and return the responses individually.

  // Promise.resolve('Promise 1 resolved')
  //   .then((result) => {
  //     res.json(result);
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: error.message });
  //   });

  // Promise.reject(new Error('Promise 2 rejected'))
  //   .catch((error) => {
  //     res.status(500).json({ error: error.message });
  //   });

  // Promise.resolve('Promise 3 resolved')
  //   .then((result) => {
  //     res.json(result);
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: error.message });
  //   });
};
