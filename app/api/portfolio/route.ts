import { sanity } from "@/lib/sanity";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const categoryId = searchParams.get("categoryId");
  const offset = Number(searchParams.get("offset") || "0");
  const limit = Number(searchParams.get("limit") || "3");

  const categories = await sanity.fetch(
    `*[_type=="category"]|order(order asc){
      _id,
      title,
      order
    }`
  );

  // if no category selected yet, use first category (if exists)
  const activeCategoryId =
    categoryId || (categories?.[0]?._id ? categories[0]._id : null);

  if (!activeCategoryId) {
    return Response.json({ ok: true, categories: [], projects: [], hasMore: false });
  }

  const projects = await sanity.fetch(
    `*[_type=="project" && category._ref==$categoryId]
      |order(order asc)[ $offset...$offset+$limit ]{
        _id,
        title,
        subtitle,
        videoType,
        videoUrl,
        tags,
        order,
        "categoryId": category->_id
      }`,
    { categoryId: activeCategoryId, offset, limit }
  );

  const total = await sanity.fetch(
    `count(*[_type=="project" && category._ref==$categoryId])`,
    { categoryId: activeCategoryId }
  );

  const hasMore = offset + limit < total;

  return Response.json({
    ok: true,
    categories,
    activeCategoryId,
    projects,
    hasMore,
  });
}
