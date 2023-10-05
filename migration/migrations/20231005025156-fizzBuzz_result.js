module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db
    //   .collection("fizzbuzz")
    //   .updateOne({ number: "14" }, { $set: { blacklisted: true } });
    await db
      .collection("fizzbuzz")
      .insertOne({
        number: "14",
        result: [
          "1",
          "2",
          "fizz",
          "4",
          "buzz",
          "fizz",
          "7",
          "8",
          "fizz",
          "buzz",
          "11",
          "fizz",
          "13",
          "14",
        ],
        createdAt: "2023-10-05T01:51:52.191Z",
      });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db
    //   .collection("fizzbuzz")
    //   .updateOne({ number: "14" }, { $set: { blacklisted: false } });
    await db
      .collection("fizzbuzz")
      .deleteOne({
        number: "14"
      });
  },
};
