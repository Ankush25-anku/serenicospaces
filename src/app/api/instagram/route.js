export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  const url = `https://graph.instagram.com/me/media
?fields=id,caption,media_type,media_url,thumbnail_url,permalink
&limit=12
&access_token=${accessToken}`;

  const response = await fetch(url);

  const data = await response.json();

  return Response.json(data);
}
