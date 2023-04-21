import fs from 'fs'
import matter from 'gray-matter';
import path from "path"

const SHORTS_DIRECTORY = path.join(process.cwd(), "shorts")

export type Short = {
    id: number,
    content: string,
}

export function getAllShorts(): Short[] {
    const fileNames = fs.readdirSync(SHORTS_DIRECTORY)
    const Shorts: Short[] = []

    fileNames.forEach((fileName) => {
        const id = parseInt(fileName.split('.md')[0], 10)

        // Some very light validation
        // @ts-ignore
        if (new Date(id) == 'Invalid Date') {
            throw `${id} isn't a valid date!`
        }

        const fullPath = path.join(SHORTS_DIRECTORY, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents)
        Shorts.push({
            id: id,
            content: matterResult.content
        })
    })

    Shorts.sort((a, z) => z.id - a.id)
    return Shorts
}
