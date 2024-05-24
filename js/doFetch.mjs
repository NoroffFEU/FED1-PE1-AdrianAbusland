export async function doFetch(url, options = {}) {
    try {
        const headers = {
            "Content-Type": "application/json",
            ...options.headers, // Allow additional custom headers
        };
        const combinedOptions = { headers, ...options };
        const response = await fetch(url, combinedOptions);

        // Check if response status is not OK (2xx)
        if (!response.ok) {
            const errorMessage = `Error ${response.status}: ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error after logging it
    } finally {
        // Perform any necessary cleanup here
    }
}