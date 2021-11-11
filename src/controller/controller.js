const homePage = (req, res) => {
  res.status(200).send("Hello World!");
};

const addtion = (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 != "number" || typeof num2 != "number") {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid data types" });
    } else if (num1 < -1000000 || num2 < -1000000) {
      return res.status(200).json({ status: "error", message: "Underflow" });
    } else if (num1 > 1000000 || num2 > 1000000) {
      return res.status(200).json({ status: "error", message: "Overflow" });
    } else {
      const result = num1 + num2;
      if (result > 1000000)
        return res.status(200).json({ status: "error", message: "Overflow" });
      else if (result < -1000000)
        return res.status(200).json({ status: "error", message: "Underflow" });
      res.status(200).json({
        status: "success",
        message: "the sum of given two numbers",
        sum: result,
      });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};
const substraction = (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 != "number" || typeof num2 != "number") {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid data types" });
    } else if (num1 < -1000000 || num2 < -1000000) {
      return res.status(200).json({ status: "error", message: "Underflow" });
    } else if (num1 > 1000000 || num2 > 1000000) {
      return res.status(200).json({ status: "error", message: "Overflow" });
    } else {
      const result = num1 - num2;
      if (result > 1000000)
        return res.status(200).json({ status: "error", message: "Overflow" });
      else if (result < -1000000)
        return res.status(200).json({ status: "error", message: "Underflow" });
      res.status(200).json({
        status: "success",
        message: "the difference of given two numbers",
        difference: result,
      });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};
const multiplication = (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 != "number" || typeof num2 != "number") {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid data types" });
    } else if (num1 < -1000000 || num2 < -1000000) {
      return res.status(200).json({ status: "error", message: "Underflow" });
    } else if (num1 > 1000000 || num2 > 1000000) {
      return res.status(200).json({ status: "error", message: "Overflow" });
    } else {
      const result = num1 * num2;
      if (result > 1000000)
        return res.status(200).json({ status: "error", message: "Overflow" });
      else if (result < -1000000)
        return res.status(200).json({ status: "error", message: "Underflow" });
      res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        result: num1 * num2,
      });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};
const division = (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (typeof num1 != "number" || typeof num2 != "number") {
      return res
        .status(200)
        .json({ status: "error", message: "Invalid data types" });
    } else if (num1 < -1000000 || num2 < -1000000) {
      return res.status(200).json({ status: "error", message: "Underflow" });
    } else if (num1 > 1000000 || num2 > 1000000) {
      return res.status(200).json({ status: "error", message: "Overflow" });
    } else if (num2 === 0) {
      return res
        .status(200)
        .json({ status: "error", message: "Cannot divide by zero" });
    } else {
      const result = num1 + num2;
      if (result > 1000000)
        return res.status(200).json({ status: "error", message: "Overflow" });
      else if (result < -1000000)
        return res.status(200).json({ status: "error", message: "Underflow" });
      res.status(200).json({
        status: "success",
        message: "The division of given numbers",
        result: num1 / num2,
      });
    }
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

module.exports = { homePage, addtion, substraction, multiplication, division };
