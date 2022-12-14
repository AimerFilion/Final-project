"use strict";
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const { v4: uuidv4 } = require("uuid");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Venues
const getVenueInfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { venue_id } = req.params;
  try {
    await client.connect();
    const db = client.db("Venues");

    const result = await db.collection("Venues").findOne(ObjectId(venue_id));

    // const lookForTitle = result.filter((_id) => {
    //   return _id;
    // });

    // console.log(lookForTitle);

    // const queries = lookForTitle.map((favorite) => {
    //   return { _id: favorite._id };
    // });

    res.status(200).json({
      ok: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

// Events
const getEventsCasa = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Events");

    const result = await db.collection("Casa").find().toArray();

    res.status(200).json({
      ok: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

const getEventsRitz = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Events");

    const result = await db.collection("Ritz").find().toArray();

    res.status(200).json({
      ok: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

//   const client = new MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     const db = client.db("Events");
//     const { date, address } = req.body;

//     const query = { address: "Bar Le Ritz PDB" };

//     const update = { $set: { date: ritzData.date } };
//     const result = await db.collection("Ritz").updateMany(query, update);
//     console.log(update);

//     res.status(200).json({
//       ok: 200,
//       data: result,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ ok: false, data: null });
//   } finally {
//     client.close();
//   }
// };

// User

const getFavoriteEvent = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email } = req.params;
  try {
    await client.connect();
    const db = client.db("User");

    const result = await db.collection("users").findOne({ email });

    const lookForFavorites = result.favorites.filter((favorite) => {
      return favorite.isFavorite;
    });
    const queries = lookForFavorites.map((favorite) => {
      return { _id: favorite._id };
    });

    const db2 = client.db("Events");
    const casa = await db2.collection("Casa").find({ $or: queries }).toArray();
    const ritz = await db2.collection("Ritz").find({ $or: queries }).toArray();
    const allEvents = [...casa, ...ritz];

    res.status(200).json({
      ok: 200,
      data: allEvents,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email } = req.params;
  try {
    await client.connect();
    const db = client.db("User");

    const result = await db.collection("users").findOne({ email });

    res.status(200).json({
      ok: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

const addNewUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("User");

    const existingUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    const dbEvents = client.db("Events");

    const casa = await dbEvents.collection("Casa").find().toArray();
    const ritz = await dbEvents.collection("Ritz").find().toArray();

    const allEvents = casa.concat(ritz);
    const favorites = [];
    allEvents.forEach((event) => {
      favorites.push({
        _id: event._id,
        isFavorite: false,
      });
    });
    if (existingUser) {
      return res
        .status(200)
        .json({ status: 200, message: "user already exists" });
    } else {
      await db.collection("users").insertOne({
        _id: uuidv4(),

        favorites,
        ...req.body,
      });
      res.status(200).json({
        ok: 200,
        message: "user added",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

const eventFavorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, event_id } = req.body;

  try {
    await client.connect();
    const db = client.db("User");

    const result = await db.collection("users").findOne({ email });

    const query = { email, "favorites._id": ObjectId(event_id) };

    const update = { $set: { "favorites.$.isFavorite": true } };

    const result1 = await db.collection("users").updateOne(query, update);

    res.status(200).json({
      ok: 200,
      data: result1,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

const unFavoriteEvent = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, event_id } = req.body;

  try {
    await client.connect();
    const db = client.db("User");

    const result = await db.collection("users").findOne({ email });

    const query = { email, "favorites._id": ObjectId(event_id) };

    const update = { $set: { "favorites.$.isFavorite": false } };

    const result1 = await db.collection("users").updateOne(query, update);

    res.status(200).json({
      ok: 200,
      data: result1,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};
// const addEventKeyInFavoriteUser = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   try {
//     await client.connect();
//     const db = client.db("Events");

//     const findKey = await db.collection("Casa").find().toArray();

//     console.log(findKey);

//     res.status(200).json({
//       ok: 200,
//       data: findKey,
//     });
//     const addEventId = findKey.map((event) => {
//       const keyObject = {};
//       // keyObject[event._id] = false;
//       keyObject.event_id = event._id;
//       keyObject.isFavorite = false;
//       return keyObject;
//     });

//     const query = { _id: ObjectId("6387d5ae47c60b09f44c0a06") };
//     const update = { $set: { favorite: addEventId } };
//     const dbUser = client.db("User");
//     await dbUser.collection("User1").updateOne(query, update);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//   }
// };

module.exports = {
  getEventsCasa,
  getEventsRitz,
  addNewUser,
  getUser,
  eventFavorite,
  unFavoriteEvent,
  getFavoriteEvent,
  getVenueInfo,
  // addEventKeyInFavoriteUser,
};
