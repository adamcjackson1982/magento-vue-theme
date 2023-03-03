const BASE_URL = 'https://m245p1.test/rest/V1';

export async function getToken(username, password) {
  const response = await fetch(`${BASE_URL}/integration/admin/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  const data = await response.json();
  return data;
}

export async function getCmsPage(pageId, token) {
  const response = await fetch(`${BASE_URL}/cmsPage/${pageId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

export async function getProductById(productId, token) {
	const response = await fetch(`${BASE_URL}/products/${productId}`, {
	  headers: {
		'Authorization': `Bearer ${token}`,
		'Content-Type': 'application/json'
	  }
	});
	const data = await response.json();
	return data;
  }
