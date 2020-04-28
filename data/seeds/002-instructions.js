
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions").truncate()
    .then(function () {
      // add data into insert
      return knex("instructions").insert([
        { step: "In a large bowl, pour boiling water over oats. Stir in butter and molasses. Let stand until mixture cools to 120°-130°, stirring occasionally." },
        { step: "In another bowl, combine 3-1/2 cups flour, yeast and salt. Beat in oat mixture until blended. Stir in enough remaining flour to form a soft dough." },
        { step: "Turn onto a floured surface; knead until smooth and elastic, about 6-8 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 1 hour." },
        { step: "Punch dough down. Turn onto a lightly floured surface; divide in half. Shape into loaves. Place in two greased 9x5-in. loaf pans. Cover and let rise until doubled, about 30 minutes." },
        { step: "Meanwhile, preheat oven to 375°. Bake 35-40 minutes or until golden brown. Remove from pans to wire racks to cool." },
      ]);
    });
};
