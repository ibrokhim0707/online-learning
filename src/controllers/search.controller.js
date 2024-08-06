const Search = require("../models/Search");

exports.createSearch = async (req, res) => {
  try {
    const search = new Search({
      query: req.body.query,
      results: req.body.results,
    });
    const savedSearch = await search.save();
    res.status(201).json(savedSearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSearches = async (req, res) => {
  try {
    const searches = await Search.find();
    res.status(200).json(searches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSearchById = async (req, res) => {
  try {
    const search = await Search.findById(req.params.id);
    if (!search) {
      return res.status(404).json({ message: "Search not found" });
    }
    res.status(200).json(search);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSearch = async (req, res) => {
  try {
    const updatedSearch = await Search.findByIdAndUpdate(
      req.params.id,
      {
        query: req.body.query,
        results: req.body.results,
      },
      { new: true }
    );
    if (!updatedSearch) {
      return res.status(404).json({ message: "Search not found" });
    }
    res.status(200).json(updatedSearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSearch = async (req, res) => {
  try {
    const deletedSearch = await Search.findByIdAndDelete(req.params.id);
    if (!deletedSearch) {
      return res.status(404).json({ message: "Search not found" });
    }
    res.status(200).json({ message: "Search deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
