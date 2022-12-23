import { NextApiRequest, NextApiResponse } from "next";

export default async function revalidate(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid token" });
    }

    try {
        await res.revalidate("/users/1");
        return res.json({ revalidate: true });
    } catch (error) {
        return res.status(500).send("Error");
    }
}
