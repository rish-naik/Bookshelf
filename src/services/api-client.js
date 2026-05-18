const BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBWcsIPUAB0aObF1QR5WZebLnfpZm6cGIE&maxResults=40`;

async function fetchBooks(query, controller) {
  try {
    const resp = await fetch(`${BASE_URL}&q=${query}`, {
      signal: controller.signal,
    });
    if (!resp.ok) {
      throw new Error(`API call failed ${resp.status}`);
    }
    const data_json = await resp.json();
    return data_json.items || [];
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error fetching books: ", error.message);
      throw error;
    }
  }
}

export default fetchBooks;
