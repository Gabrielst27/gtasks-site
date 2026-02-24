const apiURL = process.env.GTASKS_API_URL || '';

export async function checkApiHealth(): Promise<boolean> {
  try {
    await fetch(apiURL, {
      method: 'GET',
    });
    return true;
  } catch {
    return false;
  }
}
