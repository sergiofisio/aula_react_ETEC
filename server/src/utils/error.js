function handleError(error, res) {
  console.error({ error });

  if (error.missingInput)
    return res
      .status(error.status || 500)
      .json({ missingInput: error.missingInput });
  return res.status(error.status || 500).json({ error: error.message });
}

module.exports = { handleError };
