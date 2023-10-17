export function setTokenCookie(token, expirationDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    
    const cookieValue = `token=${encodeURIComponent(token)}; expires=${expirationDate.toUTCString()}; path=/; Secure; SameSite`;
    document.cookie = cookieValue;
  }
  
  // Function to get the token value from the cookie
export function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        return decodeURIComponent(cookie.substring(6)); // Extract and decode the token
      }
    }
    return null; // Return null if the token cookie is not found
  }
  
export function deleteTokenCookie() {
    // Set the cookie's expiration date to a past date
    const expirationDate = new Date('2000-01-01'); // A date in the past
    const cookieValue = `token=; expires=${expirationDate.toUTCString()}; path=/; Secure; SameSite`;
    document.cookie = cookieValue;
  }
  