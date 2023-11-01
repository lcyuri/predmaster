import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

const url = 'https://dburlkeyvault.vault.azure.net/';
const credential = new DefaultAzureCredential();
const client = new SecretClient(url, credential);

export async function getSecret(secretName: string): Promise<string> {
  try {
    const secret = await client.getSecret(secretName);
    return secret.value;
  } catch (error) {
    console.error('getSecret - ', error);
    throw new Error('Error getting secret');
  }
}
