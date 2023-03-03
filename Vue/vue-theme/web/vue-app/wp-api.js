const BASE_URL = 'https://wordpress.test/wp-json/wp/v2';

export async function getPage(pageId) {
  const response = await fetch(`${BASE_URL}/pages/${pageId}`);
  const data = await response.json();
  console.log(data)
  return data;
}