import fs, { createWriteStream } from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(r => setTimeout(r, 2000))
    // throw new Error("Something went wrong")
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const fileExtension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${fileExtension}`;

    const stream = createWriteStream(`public/image/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) 
            throw new Error("Saving Image failed");
    })

    meal.image = `/image/${fileName}`;

    db.prepare(`
        INSERT INTO MEALS
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug,
        )
    `).run(meal)
}